# Lucas Selani

**Engenheiro Mobile Sênior — Android & Flutter · Fullstack com Rust, Java e Go na AWS**

Belo Horizonte, MG · Remoto · CLT ou PJ

selani.lucas@gmail.com · +55 35 99834-6484 · [linkedin.com/in/lucasselani](https://linkedin.com/in/lucasselani) · [github.com/lucasselani](https://github.com/lucasselani)

## Resumo

Engenheiro Mobile Sênior com mais de 9 anos desenvolvendo software: 6 anos entregando apps Flutter em fintech (mais de 10 milhões de usuários) e identidade digital (mais de 200 mil usuários ativos), além de Android nativo (Kotlin/Java). Atuo em toda a stack. Na Will Bank, construí os microsserviços em Rust por trás dos fluxos de segurança do app e um sistema de Server-Driven UI (SDUI) que transformou um ciclo de release de duas semanas em uma mudança instantânea no backend. Na Unico, arquitetei um super-app Flutter modular e seu Design System, e depois passei um ano em backend Go e web React.

## Habilidades

- **Mobile:** Android (Kotlin, Java), Flutter, Dart, BLoC, Firebase (Firestore, Remote Config), Analytics (PostHog, Mixpanel, Segment), iOS via Flutter, Server-Driven UI (SDUI), Arquitetura Modular, Design Systems
- **Backend:** Rust, Java, Go, Node.js/JavaScript, TypeScript, APIs REST, Microsserviços, PostgreSQL, Redis
- **Cloud e DevOps:** AWS, GCP, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions), Trunk-Based Development, Feature Flags (GrowthBook, LaunchDarkly)
- **Web:** React
- **Práticas:** Clean Architecture, RFCs e ADRs, CODEOWNERS, Observabilidade (Datadog, New Relic, incident.io, eventos e logs), Testes automatizados
- **IA:** Agentes de LLM, Claude Code, Ollama, ComfyUI

## Experiência Profissional

### Engenheiro de Software Sênior — Autônomo | Jul 2026 – Atual

- Construo projetos de automação com IA: uma operação de conteúdo para YouTube conduzida por agentes, com jobs do Claude Code, scripts e documentação para pesquisa de nicho, roteiro, narração e geração de vídeo.

### Engenheiro de Software Sênior — Will Bank | Nov 2024 – Jul 2026

_Fintech com mais de 10 milhões de usuários · Prevenção a Fraudes · Remoto · Departamento de engenharia encerrado em jul/2026._

- Construí um sistema de **Server-Driven UI (SDUI)** para os fluxos de desafio de segurança: o app **Flutter** apenas renderiza o que o backend envia, e mudanças nas telas de senha do cartão passaram de um **ciclo de release de duas semanas** (corte, beta, publicação nas lojas) para uma **mudança instantânea no backend** com feature flag no **GrowthBook**.
- Migrei sozinho o serviço legado de senha do cartão de **Java** para um microsserviço em **Rust** na **AWS** com **PostgreSQL**, e levei suas telas para SDUI.
- Desenvolvi e mantive 4 microsserviços de backend (Rust, Java, JavaScript) do fluxo de desafios, chamado em **toda transação Pix**: o app envia o fluxo (Pix, cartão e outros) e o backend decide qual desafio exibir.
- Escrevi RFCs e ADRs da migração do serviço, da adoção de SDUI no app e de uma refatoração do pacote de prevenção a fraudes, que adicionou eventos e logs a um código com muitos bugs e sem observabilidade.
- Criei dashboards no **Datadog** (logs) e no **PostHog** (eventos) para o fluxo de desafios: saúde do fluxo, funis da jornada do usuário para encontrar pontos de abandono e painéis para depurar erros específicos.
- Stack: Flutter, Dart, Rust, Java, AWS, PostgreSQL, Server-Driven UI, GrowthBook, Datadog, PostHog.

### Desenvolvedor de Software Sênior — Unico IDtech | Jun 2020 – Nov 2024

_Líder brasileira em identidade digital · Remoto · Entrei como Desenvolvedor de Software e fui promovido a Sênior (IC5) em ago/2022._

- Arquitetei o **super-app Flutter** multimódulo (**mais de 200 mil usuários ativos**, biometria facial e documentos digitais) conforme o time crescia: pacotes por funcionalidade com time dono via **CODEOWNERS**, o que reduziu o tempo de build e os conflitos de merge, deixou o code review com o time responsável e permitiu rodar cada módulo isoladamente.
- Projetei o **Design System** usado por todos os módulos do super-app, sobre o **Módulo Core** que eu já havia construído com a camada de plataforma compartilhada por todas as funcionalidades.
- Automatizei o **CI/CD** de builds de teste e da publicação na App Store e no Google Play, e depois organizei as entregas em um **trem de releases semanal**.
- Montei o fluxo de alertas de plantão com **New Relic** e **incident.io** para o responsável da semana, e migrei analytics e feature flags de **Segment** e **Firebase** (Firestore, Remote Config) para **Mixpanel** e **LaunchDarkly**.
- No último ano, migrei para o fullstack: 6 meses como engenheiro de backend em **Go** (depois de contribuir no BFF em Go) e 6 meses em web com **React**.
- Stack: Flutter, Dart, Firebase, GCP, LaunchDarkly, Mixpanel, New Relic, incident.io, Go, React.

### Desenvolvedor Android — Toodoo | Jan 2019 – Jun 2020

_São Paulo, SP · Projetos de agência._

- Desenvolvi funcionalidades **Android** nativas para apps de clientes, incluindo um módulo de banco digital para a **Natura** e promoções por geofencing para o **Burger King**, e um app do zero para a **Wooza** (portabilidade de operadora).

### Desenvolvedor de Software e QA — Inatel Competence Center (ICC) | Jul 2014 – Jan 2019

_Santa Rita do Sapucaí, MG._

- Desenvolvi apps **Android** nativos por 2 anos e funcionalidades de backend em JavaScript sobre uma plataforma proprietária, em um projeto de telecomunicações da **Ericsson** com mais de 400 pessoas.
- Iniciei a carreira em QA (3 anos), com testes de segurança, performance e usabilidade.

## Projetos

### Darkrunner — pipeline automatizado de vídeo (TypeScript/Node.js, privado) | Nov 2025 – Abr 2026

- A partir apenas do nome do canal, carregava as configurações dele e produzia um vídeo completo sem intervenção humana: roteiro, narração, imagens, efeitos, legendas e upload no YouTube. Chegou a 15 vídeos por dia em 5 canais.

## Formação Acadêmica

**Bacharelado em Engenharia da Computação** — Inatel (Instituto Nacional de Telecomunicações) | 2014 – 2018

## Certificações

**Architecting with Google Compute Engine** — Google Cloud | Mar 2022

## Idiomas

Português (Nativo) · Inglês (Fluente; EF SET 71/100, C2)
