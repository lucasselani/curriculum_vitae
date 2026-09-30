# CV - Lucas Selani

Resume/CV of Lucas Selani, Senior Software Engineer (Fullstack & Mobile).
This repository treats my career history as code: versioned, structured, and compiled.

## 📄 Download

| Version | English | Português (BR) |
|---|---|---|
| **Fullstack** (primary: startups, fintechs, fullstack/backend roles) | [PDF](./dist/Lucas-Selani-CV-Fullstack-EN.pdf) · [DOCX](./dist/Lucas-Selani-CV-Fullstack-EN.docx) | [PDF](./dist/Lucas-Selani-CV-Fullstack-PT-BR.pdf) · [DOCX](./dist/Lucas-Selani-CV-Fullstack-PT-BR.docx) |
| **Mobile** (Flutter/Android/mobile roles) | [PDF](./dist/Lucas-Selani-CV-Mobile-EN.pdf) · [DOCX](./dist/Lucas-Selani-CV-Mobile-EN.docx) | [PDF](./dist/Lucas-Selani-CV-Mobile-PT-BR.pdf) · [DOCX](./dist/Lucas-Selani-CV-Mobile-PT-BR.docx) |

Which file to send:

- **Gupy** and Brazilian ATSs: the **PT-BR `.docx`** (Gupy recommends .doc/.docx and shows recruiters only the extracted fields). Check the extracted fields by hand after uploading.
- **Workday, Greenhouse, Lever, Ashby**, email and international roles: the **EN `.pdf`**.
- Always send the version in the same language as the job post.

## 🗂 Structure

```
resume/
  en/fullstack.md       # source for each version (edit these)
  en/mobile.md
  pt-BR/fullstack.md
  pt-BR/mobile.md
  resume.css            # PDF styling (one column, Arial, 10pt, no header/footer)
  reference.docx        # DOCX styling used by pandoc
scripts/build.mjs       # Markdown -> HTML -> PDF (Chromium) and DOCX (pandoc)
dist/                   # generated files (committed)
linkedin/profile.md     # LinkedIn headline, About, experience and skills, aligned with the CV
cv.md, cv.pt-BR.md, cv.pdf, cv.pt-BR.pdf, style.css   # previous version, kept as backup
```

## 🚀 How to Build

Requirements: Node.js 20+ and [pandoc](https://pandoc.org/installing.html) (`brew install pandoc`).

```sh
npm install
npx playwright install chromium   # or set CHROMIUM_PATH to an existing Chrome/Chromium
npm run build
```

The old flow (VS Code + Markdown PDF on `cv.md`) still works for the backup files, but its PDFs embed Type3 fonts and merge the job title, date and company lines into one line of text, which is worse for ATS parsing.

---

_Last Update: September 2026_
