# Lucas Selani

**Senior Mobile Engineer — Android & Flutter · Fullstack with Rust, Java and Go on AWS**

Belo Horizonte, Brazil · Remote (US, Brazil and Europe time zones) · Full-time or contractor

selani.lucas@gmail.com · +55 35 99834-6484 · [linkedin.com/in/lucasselani](https://linkedin.com/in/lucasselani) · [github.com/lucasselani](https://github.com/lucasselani)

## Summary

Senior Mobile Engineer with 9+ years building software: 6 years shipping Flutter apps in fintech (10M+ users) and digital identity (200k+ active users), on top of native Android (Kotlin/Java). Works across the stack. At Will Bank, built the Rust microservices behind the app's security flows and a Server-Driven UI (SDUI) system that turned a two-week release cycle into an instant backend change. At Unico, architected a modular Flutter super-app and its Design System, then spent a year on Go backend and React web.

## Skills

- **Mobile:** Android (Kotlin, Java), Flutter, Dart, BLoC, Firebase (Firestore, Remote Config), Analytics (PostHog, Mixpanel, Segment), iOS via Flutter, Server-Driven UI (SDUI), Modular Architecture, Design Systems
- **Backend:** Rust, Java, Go, Node.js/JavaScript, TypeScript, REST APIs, Microservices, PostgreSQL, Redis
- **Cloud & DevOps:** AWS, GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions), Trunk-Based Development, Feature Flags (GrowthBook, LaunchDarkly)
- **Web:** React
- **Practices:** Clean Architecture, RFCs and ADRs, CODEOWNERS, Observability (Datadog, New Relic, incident.io, events and logs), Automated Testing
- **AI:** LLM agents, Claude Code, Ollama, ComfyUI

## Experience

### Senior Software Engineer — Independent | Jul 2026 – Present

- Building AI automation projects: an agent-driven YouTube content operation that uses Claude Code jobs, scripts and documentation for niche research, scripting, narration and video generation.

### Senior Software Engineer — Will Bank | Nov 2024 – Jul 2026

_Fintech with 10M+ users · Fraud Prevention · Remote · Engineering department closed in Jul 2026._

- Built a **Server-Driven UI (SDUI)** system for the security challenge flows: the **Flutter** app only renders what the backend sends, so changes to the card password screens went from a **two-week release cycle** (code freeze, beta, store rollout) to an **instant backend change** behind a **GrowthBook** feature flag.
- Migrated the legacy **Java** card password service to a **Rust** microservice on **AWS** with **PostgreSQL** as the sole engineer on it, and moved its screens to SDUI.
- Developed and maintained 4 backend microservices (Rust, Java, JavaScript) for the challenge flow, which is called on **every Pix transaction**: the app sends the flow (Pix, card and others) and the backend decides which challenge to show.
- Wrote RFCs and ADRs for the service migration, the app's move to SDUI and a refactor of the fraud prevention package that added events and logs to a buggy, unobservable codebase.
- Built **Datadog** (logs) and **PostHog** (events) dashboards for the challenge flow: flow health, user-journey funnels to find drop-off points, and boards for debugging specific errors.
- Stack: Flutter, Dart, Rust, Java, AWS, PostgreSQL, Server-Driven UI, GrowthBook, Datadog, PostHog.

### Senior Software Developer — Unico IDtech | Jun 2020 – Nov 2024

_Brazil's leader in digital identity · Remote · Joined as Software Developer, promoted to Senior (IC5) in Jan 2023._

- Architected the multi-module **Flutter super-app** (**200k+ active users**, facial biometrics and digital documents) as the team grew: feature packages owned by each team through **CODEOWNERS**, which cut build times and merge conflicts, kept reviews with the owning team and let each module run on its own.
- Designed the **Design System** used by every module of the super-app, on top of the **Core Module** built earlier with the platform layer shared by all features.
- Automated **CI/CD** for test builds and App Store / Google Play publishing, later organizing delivery into a **weekly release train**.
- Set up on-call alerting with **New Relic** and **incident.io** for the engineer on duty each week, and moved analytics and feature flags from **Segment** and **Firebase** (Firestore, Remote Config) to **Mixpanel** and **LaunchDarkly**.
- In the final year moved into fullstack work: 6 months as a backend engineer in **Go** (after contributing to the Go BFF) and 6 months on **React** web.
- Stack: Flutter, Dart, Firebase, LaunchDarkly, Mixpanel, New Relic, incident.io, Go, React.

### Android Developer — Toodoo | Jan 2019 – Jun 2020

_São Paulo, Brazil · Agency projects._

- Built native **Android** features for client apps, including a digital banking module for **Natura** and geofenced promotions for **Burger King**, and an app from scratch for **Wooza** (carrier portability).

### Software Developer & QA — Inatel Competence Center (ICC) | Jul 2014 – Jan 2019

_Minas Gerais, Brazil._

- Developed native **Android** apps for 2 years and backend features in JavaScript on a proprietary platform for a large **Ericsson** telecom project with 400+ people.
- Started in QA (3 years) with security, performance and usability testing.

## Projects

### Darkrunner — automated video pipeline (TypeScript/Node.js, private) | Nov 2025 – Apr 2026

- Given only a channel name, loaded that channel's settings and produced a full video with no human input: script, voice-over, images, effects, subtitles and YouTube upload. Ran up to 15 videos a day across 5 channels.

## Education

**BSc in Computer Engineering** — Inatel (National Institute of Telecommunications) | 2014 – 2018

## Certifications

**Architecting with Google Compute Engine** — Google Cloud | Mar 2022

## Languages

Portuguese (Native) · English (Full professional; EF SET 71/100, C2)
