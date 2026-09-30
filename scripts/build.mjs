// Builds every resume/<lang>/<persona>.md into dist/ as PDF (Chromium) and
// DOCX (pandoc, styled by resume/reference.docx).
//
//   npm install && npx playwright install chromium
//   npm run build
//
// Set CHROMIUM_PATH to use an already-installed Chromium/Chrome binary.
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { marked } from "marked";
import { chromium } from "playwright";

const root = resolve(import.meta.dirname, "..");
const resumeDir = join(root, "resume");
const distDir = join(root, "dist");
const tmpDir = join(root, ".build");
const css = readFileSync(join(resumeDir, "resume.css"), "utf8");

const personaLabel = {
  en: { fullstack: "Fullstack", mobile: "Mobile" },
  "pt-BR": { fullstack: "Fullstack", mobile: "Mobile" },
};

function outputName(lang, persona) {
  const suffix = lang === "en" ? "EN" : "PT-BR";
  return `Lucas-Selani-CV-${personaLabel[lang][persona]}-${suffix}`;
}

function toHtml(markdown, lang) {
  const body = marked.parse(markdown);
  const title = markdown.match(/^# (.+)$/m)[1];
  const headline = markdown.match(/^\*\*(.+)\*\*$/m)[1];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${title} — ${headline}</title>
<meta name="author" content="${title}">
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;
}

const hasPandoc = spawnSync("pandoc", ["--version"], { stdio: "ignore" }).status === 0;
if (!hasPandoc) console.warn("pandoc not found: skipping DOCX (brew install pandoc)");

function buildDocx(markdownPath, lang, outPath) {
  if (!hasPandoc) return;
  execFileSync("pandoc", [
    markdownPath,
    "--from", "markdown",
    "--reference-doc", join(resumeDir, "reference.docx"),
    "--metadata", `lang=${lang}`,
    "-o", outPath,
  ]);
}

mkdirSync(distDir, { recursive: true });
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();

for (const lang of Object.keys(personaLabel)) {
  for (const file of readdirSync(join(resumeDir, lang)).filter((f) => f.endsWith(".md"))) {
    const persona = basename(file, ".md");
    const name = outputName(lang, persona);
    const markdownPath = join(resumeDir, lang, file);
    const htmlPath = join(tmpDir, `${name}.html`);

    writeFileSync(htmlPath, toHtml(readFileSync(markdownPath, "utf8"), lang));
    await page.goto(`file://${htmlPath}`);
    await page.pdf({ path: join(distDir, `${name}.pdf`), preferCSSPageSize: true, printBackground: false });
    buildDocx(markdownPath, lang, join(distDir, `${name}.docx`));
    console.log(`built dist/${name}.{pdf,docx}`);
  }
}

await browser.close();
rmSync(tmpDir, { recursive: true, force: true });
