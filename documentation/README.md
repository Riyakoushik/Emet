# Emet

> A private Android memory companion built for one person, one story, and one device-first experience.

Emet is a **single-user native Android application** for continuing a deeply personal conversation through memory-grounded AI. It stores messages, persona details, and written memories locally on the phone first, then uses online AI only when the user chooses to chat.

**Version direction:** Android-first, native, secure, local-first, mobile-only for v1.

---

## Product Position

Emet is not a social product, public chatbot, or multi-user SaaS. It is a private memory system designed to feel emotionally personal, technically reliable, and secure enough for long-term use.

---

## Core Features

| Feature | Description | Status |
|---|---|---|
| Real-time AI chat | Streaming replies with a natural conversation flow | In progress |
| Persona engine | Name, traits, tone, and key memories shape every reply | In progress |
| Memory vault | Save dates, notes, moments, and emotional context locally | In progress |
| Full-text memory search | Fast local search across saved memories | Planned for v1 |
| Local backup export | Manual JSON export for recovery on a new device | Planned for v1 |
| Privacy-first design | No accounts, no analytics, no public profiles | Always |
| App lock | Optional PIN or biometric gate for extra privacy | Planned |

---

## Final Tech Stack

| Layer | Choice |
|---|---|
| Platform | Native Android only |
| Language | Kotlin |
| UI | Jetpack Compose |
| Architecture | UI -> ViewModel -> Repository -> Local DB / Remote API |
| Database | Room on SQLite |
| Search | SQLite FTS |
| Networking | Retrofit + OkHttp |
| AI | Groq chat completions with streaming |
| Concurrency | Coroutines + Flow |
| Dependency Injection | Hilt |
| Preferences / small secrets | DataStore + Android Keystore-backed encryption |
| Build | Gradle + Android Studio |
| Backup | Local JSON export/import in v1 |

See `TECH-STACK.md` for the full rationale.

---

## v1 Scope

Version 1 is intentionally narrow:

- Android phone only.
- One user only.
- No login system.
- No web app.
- No cross-device sync in core v1.
- No public cloud dashboard.

This keeps the first serious build secure, maintainable, and emotionally focused.

---

## Setup

### Requirements
- Android Studio
- JDK 17
- Android SDK for current stable Android
- Groq API key

### Local run

```bash
git clone https://github.com/yourname/emet.git
cd emet
./gradlew assembleDebug
./gradlew installDebug
```

### Release build

```bash
./gradlew assembleRelease
```

---

## Project Structure

```text
emet/
├── app/
│   ├── src/main/java/com/emet/
│   │   ├── ui/
│   │   │   ├── chat/
│   │   │   ├── memories/
│   │   │   ├── settings/
│   │   │   └── theme/
│   │   ├── data/
│   │   │   ├── local/
│   │   │   ├── remote/
│   │   │   ├── repository/
│   │   │   └── backup/
│   │   ├── domain/
│   │   ├── security/
│   │   ├── di/
│   │   └── MainActivity.kt
│   ├── src/main/res/
│   └── build.gradle.kts
├── docs/
└── gradle/
```

---

## Documentation Index

| File | Purpose |
|---|---|
| `PRD.md` | Product requirements and acceptance criteria |
| `ARCHITECTURE.md` | Native Android system design |
| `TECH-STACK.md` | Final technology choices and rationale |
| `DATABASE.md` | Local data model and query design |
| `API.md` | Groq integration and streaming contract |
| `ROADMAP.md` | Implementation phases |
| `SECURITY.md` | Privacy model and hardening checklist |
| `BUSINESS-MODEL.md` | Cost structure for a personal app |
| `PERSONAS.md` | Owner, AI persona, and build-role definitions |
| `CONTRIBUTING.md` | Solo development standards |
| `CHANGELOG.md` | Version history |

---

## Privacy Statement

Emet keeps core data on the Android device and does not depend on public accounts, user sharing, or analytics SDKs. Online access is used only for AI inference when the user actively sends a message.
