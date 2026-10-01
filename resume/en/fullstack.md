# Lucas Selani

**Senior Software Engineer — Fullstack & Mobile · Rust, Java, Go, React, Flutter · AWS/GCP**

Belo Horizonte, Brazil · Remote (US, Brazil and Europe time zones) · Full-time or contractor

selani.lucas@gmail.com · +55 35 99834-6484 · [linkedin.com/in/lucasselani](https://linkedin.com/in/lucasselani) · [github.com/lucasselani](https://github.com/lucasselani)

## Summary

Senior Software Engineer with 9+ years building products end to end in fintech (10M+ users) and digital identity (200k+ active users). Writes backend services in Rust, Java and Go on AWS with PostgreSQL, and the mobile and web clients that use them in Flutter, native Android and React. At Will Bank, built a full-stack Server-Driven UI (SDUI) system that turned a two-week release cycle into an instant backend change, and migrated a legacy Java service to Rust.

## Skills

- **Backend:** Rust, Java, Go, Node.js/JavaScript, TypeScript, REST APIs, Microservices, PostgreSQL, Redis
- **Cloud & DevOps:** AWS, GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions), Trunk-Based Development, Feature Flags (GrowthBook, LaunchDarkly), Observability (Datadog, New Relic, incident.io)
- **Mobile & Web:** Flutter, Dart, Android (Kotlin, Java), iOS via Flutter, React, BLoC, Firebase, PostHog, Mixpanel, Segment
- **Architecture:** Server-Driven UI (SDUI), Microservices, Clean Architecture, Modular Architecture, Design Systems, RFCs and ADRs
- **AI:** LLM agents, Claude Code, Ollama, ComfyUI, Remotion, Playwright

## Experience

### Senior Software Engineer — Independent | Jul 2026 – Present

- Building AI automation projects: an agent-driven YouTube content operation that uses Claude Code jobs, scripts and documentation for niche research, scripting, narration and video generation.

### Senior Software Engineer — Will Bank | Nov 2024 – Jul 2026

_Fintech with 10M+ users · Fraud Prevention · Remote · Engineering department closed in Jul 2026._

- Developed and maintained 4 backend microservices (**Rust**, **Java**, JavaScript) on **AWS** with **PostgreSQL** for the security challenge flow, which is called on **every Pix transaction**: the app sends the flow (Pix, card and others) and the backend decides which challenge to show.
- Built a full-stack **Server-Driven UI (SDUI)** system on top of it: the backend returns the screens and the **Flutter** app only renders them, so changes to the card password screens went from a **two-week release cycle** (code freeze, beta, store rollout) to an **instant backend change** behind a **GrowthBook** feature flag.
- Migrated the legacy Java card password service to Rust as the sole engineer on it, and moved its screens to SDUI.
- Wrote RFCs and ADRs for the service migration, the app's move to SDUI and a refactor of the fraud prevention package that added events and logs to a buggy, unobservable codebase.
- Built **Datadog** (logs) and **PostHog** (events) dashboards for the challenge flow: flow health, user-journey funnels to find drop-off points, and boards for debugging specific errors.
- Stack: Rust, Java, JavaScript, AWS, PostgreSQL, Flutter, Dart, Server-Driven UI, GrowthBook, Datadog, PostHog.

### Senior Software Developer — Unico IDtech | Jun 2020 – Nov 2024

_Brazil's leader in digital identity · Remote · Joined as Software Developer, promoted to Senior (IC5) in Jan 2023._

- In the final year moved into fullstack work: 6 months as a backend engineer in **Go** (after contributing to the Go BFF) and 6 months on **React** web.
- Architected the multi-module **Flutter super-app** (**200k+ active users**, facial biometrics and digital documents) as the team grew: feature packages owned by each team through **CODEOWNERS**, which cut build times and merge conflicts, kept reviews with the owning team and let each module run on its own.
- Designed the **Design System** used by every module of the super-app, on top of the **Core Module** built earlier with the platform layer shared by all features.
- Automated **CI/CD** for test builds and App Store / Google Play publishing, later organizing delivery into a **weekly release train**.
- Set up on-call alerting with **New Relic** and **incident.io** for the engineer on duty each week, and moved analytics and feature flags from **Segment** and **Firebase** (Firestore, Remote Config) to **Mixpanel** and **LaunchDarkly**.
- Stack: Go, React, Flutter, Dart, Firebase, LaunchDarkly, Mixpanel, New Relic, incident.io.

### Android Developer — Toodoo | Jan 2019 – Jun 2020

_São Paulo, Brazil · Agency projects._

- Built native **Android** features for client apps, including a digital banking module for **Natura** and geofenced promotions for **Burger King**, and an app from scratch for **Wooza** (carrier portability).

### Software Developer & QA — Inatel Competence Center (ICC) | Jul 2014 – Jan 2019

_Minas Gerais, Brazil._

- Developed backend features in JavaScript on a proprietary platform for a large **Ericsson** telecom project with 400+ people, and native **Android** apps for 2 years.
- Started in QA (3 years) with security, performance and usability testing.

## Projects

### Darkrunner — automated video pipeline (TypeScript/Node.js, private) | Nov 2025 – Apr 2026

- TypeScript monorepo where LLM agents handle scripting, planning and QA: given only a channel name, it produced a full video (script, voice-over, images, effects, subtitles) and uploaded it to YouTube, up to 15 videos a day across 5 channels. Built with Remotion, Playwright, Ollama and ComfyUI.

## Education

**BSc in Computer Engineering** — Inatel (National Institute of Telecommunications) | 2014 – 2018

## Certifications

**Architecting with Google Compute Engine** — Google Cloud | Mar 2022

## Languages

Portuguese (Native) · English (Full professional; EF SET 71/100, C2)
