# LinkedIn — campo por campo

Copie cada bloco para o campo indicado. A ordem segue o LinkedIn: topo do perfil → About → Experience → Projects → Education → Licenses & certifications → Skills → Languages → Open to Work.

- **Perfil primário em inglês.** Ao final há a versão em português do Headline e do About para o perfil secundário.
- Os limites de caracteres estão entre parênteses. Os textos já estão dentro deles.
- `[preencher]` marca um dado que eu não sei. Não invente: deixe vazio se não souber.
- Os títulos seguem o que a função era na prática dentro de cada empresa (na Will Bank não havia distinção entre mobile e backend na carreira).

---

## 1. Intro (lápis no topo do perfil)

| Campo | Valor |
|---|---|
| First name | Lucas |
| Last name | Selani |
| Headline | ver abaixo |
| Current position | Self-employed (a posição da seção 3.1) |
| Education (show in intro) | Inatel |
| Country/Region | Brazil |
| City | Belo Horizonte, Minas Gerais |

**Headline** (220)

```
Senior Mobile Engineer · Android & Flutter | Fullstack: Rust · Java · Go · React | AWS · GCP | Server-Driven UI | Fintech & Digital Identity | AI agents | Remote
```

Alternativa com foco fullstack:

```
Senior Software Engineer · Fullstack & Mobile | Rust · Java · Go · React · Flutter · Android | AWS · GCP | Server-Driven UI | Fintech | AI agents | Remote
```

**Contact info**

| Campo | Valor |
|---|---|
| Profile URL | linkedin.com/in/lucasselani |
| Email | selani.lucas@gmail.com |
| Phone | +55 35 99834-6484 (Mobile) |
| Website | github.com/lucasselani (Type: Portfolio) |

---

## 2. About (2.600)

```
Senior Mobile Engineer with 9+ years building software: 6 years shipping Flutter apps in fintech and digital identity, on top of native Android (Kotlin/Java). I work across the stack, writing the backend that my screens depend on: Rust, Java and Go microservices on AWS with PostgreSQL. Full Stack / Fullstack when the product needs it, mobile at the core.

What I've built:

• Will Bank (fintech, 10M+ users): a Server-Driven UI (SDUI) system for the fraud prevention challenges. The backend sends the screens and the Flutter app only renders them, so changing the card password flow went from a two-week release cycle (code freeze, beta, store rollout) to an instant backend change behind a feature flag. I also developed 4 microservices (Rust, Java, JavaScript) for the challenge flow, which is called on every Pix transaction, and migrated the legacy Java card password service to Rust as the sole engineer on it.

• Unico (digital identity, 200k+ active users): architected a multi-module Flutter super-app with facial biometrics and digital documents, its Core Module and the Design System used by every module, plus CI/CD for a trunk-based monorepo with a weekly release train. In my final year I worked 6 months on Go backend and 6 months on React web.

• Darkrunner: a TypeScript multi-agent pipeline that, given a channel name, wrote, narrated, edited and uploaded full YouTube videos with no human input, up to 15 videos a day across 5 channels. Today I run an AI content operation on Claude Code.

I write RFCs and ADRs, care about observability (events and logs) and like owning a feature from the API contract to the UI.

Stack: Flutter · Dart · Android (Kotlin, Java) · Rust · Java · Go · TypeScript/Node.js · React · AWS · GCP · PostgreSQL · Redis · Docker · Kubernetes · Terraform · CI/CD · LLM agents

Looking for: Senior Mobile (Android/Flutter), Fullstack or Backend roles. Remote, US, Brazil or Europe time zones, full-time or contractor. English: full professional (EF SET C2).

Contact: selani.lucas@gmail.com
```

---

## 3. Experience

Em cada posição, em **Skills** o LinkedIn aceita até 5. Use exatamente os nomes sugeridos pelo autocomplete.

### 3.1 Posição atual

| Campo | Valor |
|---|---|
| Title | Senior Software Engineer |
| Employment type | Self-employed |
| Company or organization | Self-employed |
| I am currently working in this role | ✅ |
| Start date | Jul 2026 |
| Location | Belo Horizonte, Minas Gerais, Brazil |
| Location type | Remote |
| Skills | AI Agents · Large Language Models (LLM) · TypeScript · Automation · Prompt Engineering |

**Description** (2.000)

```
Building AI automation projects after the closure of Will Bank's engineering department.

• Running an AI-driven YouTube content operation built on Claude Code: agent jobs, scripts and documentation that research niches, write scripts, generate narration and video assets, and package each upload.
• Previously built Darkrunner, a TypeScript/Node.js multi-agent video pipeline (see Projects).

Open to senior mobile, fullstack and backend roles (remote, US/Brazil/Europe time zones).

Stack: Claude Code · LLM agents · TypeScript · Node.js · Playwright · Remotion · FFmpeg
```

### 3.2 Will Bank

| Campo | Valor |
|---|---|
| Title | Senior Software Engineer |
| Employment type | Full-time |
| Company or organization | Will Bank |
| Start date | Nov 2024 |
| End date | Jul 2026 |
| Location | Brazil |
| Location type | Remote |
| Skills | Flutter · Rust · Amazon Web Services (AWS) · PostgreSQL · Microservices |

**Description** (2.000)

```
Fintech with 10M+ users. Fraud Prevention squad, working across mobile and backend. Engineering department closed in Jul 2026.

• Built a Server-Driven UI (SDUI) system for the security challenge flows: the Flutter app only renders what the backend sends, so changes to the card password screens went from a two-week release cycle (code freeze, beta, store rollout) to an instant backend change behind a feature flag.
• Migrated the legacy Java card password service to a Rust microservice on AWS with PostgreSQL as the sole engineer on it, and moved its screens to SDUI.
• Developed and maintained 4 backend microservices (Rust, Java, JavaScript) for the challenge flow, which is called on every Pix transaction: the app sends the flow (Pix, card and others) and the backend decides which challenge to show.
• Wrote RFCs and ADRs for the service migration, the app's move to SDUI and a refactor of the fraud prevention package that added events and logs to a buggy, unobservable codebase.

Stack: Flutter · Dart · Rust · Java · JavaScript · AWS · PostgreSQL · Server-Driven UI · Feature Flags
```

### 3.3 Unico IDtech (duas posições na mesma empresa)

Cadastre como duas posições na mesma empresa. O LinkedIn agrupa e mostra a promoção.

**Posição mais recente**

| Campo | Valor |
|---|---|
| Title | Senior Software Developer |
| Employment type | Full-time |
| Company or organization | Unico |
| Start date | Jan 2023 |
| End date | Nov 2024 |
| Location | Brazil |
| Location type | Remote |
| Skills | Flutter · Go (Programming Language) · React.js · Software Architecture · Continuous Integration and Continuous Delivery (CI/CD) |

```
Brazil's leader in digital identity. IC5 (Senior) on the super-app and, in the final year, on backend and web.

• Architected and scaled a multi-module Flutter super-app serving 200k+ active users, with facial biometrics and digital documents.
• Split the app into feature packages owned by each team through CODEOWNERS, which cut build times and merge conflicts, kept reviews with the owning team and let each module run on its own.
• Designed the Core Module and the Design System used by every module of the super-app.
• Built the CI/CD pipeline for the trunk-based monorepo, with automated tests and a weekly release train to the App Store and Google Play.
• Final year: 6 months as a backend engineer in Go (after contributing to the Go BFF) and 6 months on React web.

Stack: Flutter · Dart · BLoC · Go · React · GitHub Actions · Monorepo
```

**Posição anterior**

| Campo | Valor |
|---|---|
| Title | Software Developer |
| Employment type | Full-time |
| Company or organization | Unico |
| Start date | Jun 2020 |
| End date | Dec 2022 |
| Location type | Remote |
| Skills | Flutter · Dart · Mobile Application Development |

```
Mobile developer on Unico's Flutter super-app (digital identity). Promoted to Senior Software Developer in Jan 2023.

Stack: Flutter · Dart · Android
```

### 3.4 Toodoo

| Campo | Valor |
|---|---|
| Title | Android Developer |
| Employment type | Full-time |
| Company or organization | Toodoo |
| Start date | Jan 2019 |
| End date | Jun 2020 |
| Location | São Paulo, Brazil |
| Location type | Hybrid |
| Skills | Android Development · Kotlin · Java |

```
Agency projects for enterprise clients.

• Built native Android features for client apps, including a digital banking module for Natura and geofenced promotions for Burger King.
• Built a native Android app from scratch for Wooza (phone carrier portability).
```

### 3.5 Inatel Competence Center (ICC)

| Campo | Valor |
|---|---|
| Title | Software Developer & QA |
| Employment type | Full-time |
| Company or organization | Inatel Competence Center |
| Start date | Jul 2014 |
| End date | Jan 2019 |
| Location | Santa Rita do Sapucaí, Minas Gerais, Brazil |
| Location type | On-site |
| Skills | Android Development · JavaScript · Quality Assurance |

```
• Developed native Android apps for 2 years.
• Developed backend features in JavaScript on a proprietary platform for a large Ericsson telecom project with 400+ people.
• Started in QA (3 years) with security, performance and usability testing.
```

---

## 4. Projects

| Campo | Valor |
|---|---|
| Project name | Darkrunner — Multi-agent AI video pipeline |
| Start date | Nov 2025 |
| End date | Apr 2026 |
| Associated with | (deixe vazio: foi projeto pessoal, feito em paralelo à Will Bank) |
| Skills | TypeScript · Node.js · AI Agents · Playwright · Large Language Models (LLM) |

```
TypeScript/Node.js monorepo where LLM agents handle scripting, planning and QA. Given only a channel name, it loaded that channel's settings and produced a full podcast-style video (script, voice-over, images, effects, subtitles) and uploaded it to YouTube, with no human input.

• Programmatic video rendering with Remotion; images and audio generated locally with Ollama and ComfyUI.
• A second flow generated Veo 3 video clips through Playwright browser automation.
• Ran up to 15 videos a day across 5 channels, a few hundred videos in total.
```

---

## 5. Education

| Campo | Valor |
|---|---|
| School | Inatel - Instituto Nacional de Telecomunicações |
| Degree | Bachelor's degree |
| Field of study | Computer Engineering |
| Start date | 2014 |
| End date | 2018 |

---

## 6. Licenses & certifications

**Google Cloud**

| Campo | Valor |
|---|---|
| Name | Architecting with Google Compute Engine |
| Issuing organization | Google |
| Issue date | Mar 2022 |
| Expiration date | (no expiration) |
| Credential ID | P-A+V+2022-03-21_73B020A5 |
| Skills | Google Cloud Platform (GCP) · Cloud Computing · Compute Engine |

**EF SET** (você já tem cadastrada; confira se está assim)

| Campo | Valor |
|---|---|
| Name | EF SET English Certificate 71/100 (C2 Proficient) |
| Issuing organization | EF SET |

---

## 7. Skills (limite 100; meta 50–75)

Adicione na ordem abaixo. Depois, em cada skill, associe as experiências onde ela aparece (Will Bank, Unico etc.).

**Top skills (fixar as 3 primeiras / aparecem no topo):** Flutter · Android Development · Rust

**Mobile**
Flutter · Dart · Android Development · Kotlin · Java · Mobile Application Development · Mobile Architecture · iOS Development · BLoC · Firebase · Server-Driven UI · Design Systems · Modular Architecture · Clean Architecture

**Backend**
Rust · Java · Go (Programming Language) · Node.js · JavaScript · TypeScript · Microservices · REST APIs · Back-End Web Development · PostgreSQL · Redis · Software Architecture · System Design

**Web / Fullstack**
React.js · Full-Stack Development · Front-End Development

**Cloud & DevOps**
Amazon Web Services (AWS) · Google Cloud Platform (GCP) · Docker · Kubernetes · Terraform · Continuous Integration and Continuous Delivery (CI/CD) · GitHub Actions · Git · Trunk-Based Development · Feature Flags · Monorepos

**Qualidade e práticas**
Automated Testing · Quality Assurance · Observability · Technical Documentation · Code Review · Architecture Decision Records

**IA e automação**
AI Agents · Large Language Models (LLM) · Prompt Engineering · Claude · Generative AI · Playwright · Automation

**Domínio**
Fintech · Fraud Prevention · Digital Identity · Biometrics · Mobile Banking

---

## 8. Languages

| Language | Proficiency |
|---|---|
| Portuguese | Native or bilingual proficiency |
| English | Full professional proficiency |

---

## 9. Open to Work (botão "Open to" → "Finding a new job")

| Campo | Valor |
|---|---|
| Job titles (até 5) | Senior Mobile Engineer · Senior Android Developer · Senior Flutter Developer · Senior Full Stack Engineer · Senior Software Engineer |
| Location types | Remote · Hybrid · On-site |
| Locations (on-site) | Belo Horizonte, Minas Gerais, Brazil |
| Locations (remote) | Brazil · United States · Canada · Portugal · United Kingdom · Germany · Spain · Netherlands |
| Start date | Immediately, I'm actively applying |
| Employment types | Full-time · Contract |
| Visibility | Recruiters only (ativa o Spotlight). O banner público #OpenToWork é um teste opcional de 30 dias. |

---

## 10. Featured

Hoje não há repositório público para fixar. Quando abrir algum (por exemplo, o jogo), fixe aqui o repositório com README e GIF. Até lá, um post curto sobre a migração para SDUI na Will Bank (o antes e depois das duas semanas) funciona como prova do trabalho.

---

## 11. Perfil secundário em português (Add profile in another language → Português)

**Headline**

```
Engenheiro Mobile Sênior · Android & Flutter | Fullstack: Rust · Java · Go · React | AWS · GCP | Server-Driven UI | Fintech e Identidade Digital | Agentes de IA | Remoto
```

**About**

```
Engenheiro Mobile Sênior com mais de 9 anos desenvolvendo software: 6 anos entregando apps Flutter em fintech e identidade digital, além de Android nativo (Kotlin/Java). Atuo em toda a stack e escrevo o backend de que minhas telas dependem: microsserviços em Rust, Java e Go na AWS com PostgreSQL.

O que construí:

• Will Bank (fintech, 10M+ usuários): um sistema de Server-Driven UI (SDUI) para os desafios de prevenção a fraudes. O backend envia as telas e o app Flutter só renderiza, e mudar o fluxo de senha do cartão passou de um ciclo de release de duas semanas para uma mudança instantânea no backend com feature flag. Também desenvolvi 4 microsserviços (Rust, Java, JavaScript) do fluxo de desafios, chamado em toda transação Pix, e migrei sozinho o serviço legado de senha do cartão de Java para Rust.

• Unico (identidade digital, 200 mil+ usuários ativos): arquitetei um super-app Flutter multimódulo com biometria facial e documentos digitais, o Módulo Core e o Design System usados por todos os módulos, e o CI/CD de um monorepo trunk-based com trem de releases semanal. No último ano, trabalhei 6 meses com backend em Go e 6 meses com web em React.

• Darkrunner: pipeline multiagentes em TypeScript que, a partir do nome de um canal, escrevia, narrava, editava e publicava vídeos completos no YouTube sem intervenção humana, chegando a 15 vídeos por dia em 5 canais.

Stack: Flutter · Dart · Android (Kotlin, Java) · Rust · Java · Go · TypeScript/Node.js · React · AWS · GCP · PostgreSQL · Redis · Docker · Kubernetes · Terraform · CI/CD · Agentes de LLM

Busco: vagas sênior de Mobile (Android/Flutter), Fullstack ou Backend. Remoto, CLT ou PJ. Inglês fluente (EF SET C2).

Contato: selani.lucas@gmail.com
```
