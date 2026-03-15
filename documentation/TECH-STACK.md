# TECH-STACK.md — Technology Stack
## Emet | Native Android Edition

**Decision:** This project is now Android-first, Kotlin-first, and local-first.

---

## Core Platform

| Tool | Choice | Why |
|---|---|---|
| Platform | Native Android | Best control, tighter security surface, one clear target |
| Language | Kotlin | Modern Android standard, strong type safety |
| IDE | Android Studio | Official tooling, emulator, profiler, signing support |
| Build | Gradle Kotlin DSL | Standard Android build pipeline |

---

## UI Layer

| Tool | Role | Reason |
|---|---|---|
| Jetpack Compose | UI toolkit | Modern native UI, faster iteration, less XML overhead |
| Material 3 | Design system | Consistent Android-first components |
| Navigation Compose | Screen navigation | Clean native navigation for chat, memories, settings |
| Coil | Lightweight image loading if needed later | Safe future option for attachments |

---

## App Architecture

| Tool / Pattern | Role | Reason |
|---|---|---|
| MVVM + Repository | App structure | Clean separation of UI, state, and data |
| ViewModel | UI state holder | Lifecycle-safe screen state |
| Coroutines | Async work | Clean concurrency for DB and network |
| Flow / StateFlow | Reactive streams | Good fit for live chat and local search updates |
| Hilt | Dependency injection | Standard Android DI with less manual wiring |

---

## Data Layer

| Tool | Role | Reason |
|---|---|---|
| Room | Primary persistence API | Safe abstraction over SQLite for Android |
| SQLite | Actual local database engine | Durable local storage, zero vendor lock-in |
| SQLite FTS | Memory search | Fast keyword search without external service |
| DataStore | Small local settings | Good for preferences and small config |

---

## AI and Networking

| Tool | Role | Reason |
|---|---|---|
| Groq API | LLM provider | Fast online inference for personal chat |
| Retrofit | HTTP client layer | Clean typed API integration |
| OkHttp | Networking engine | Stable Android standard, streaming support |
| Custom stream parser | Incremental response assembly | Needed for token-by-token chat updates |
| Kotlin serialization | JSON parsing | Consistent Kotlin-native data models |

---

## Security Choices

| Tool | Role | Reason |
|---|---|---|
| Android Keystore | Key protection | Best native place for device-bound secrets |
| Encrypted preferences / encrypted storage wrapper | Sensitive local values | Safer than plain text settings |
| Room local database | Primary data storage | App sandboxed by Android OS |
| Optional app lock | Extra privacy gate | Helps if someone opens the phone while unlocked |

---

## Backup Strategy

| Phase | Choice | Notes |
|---|---|---|
| v1 | Local JSON export/import | Safer and simpler than early cloud sync |
| Later | Optional encrypted cloud backup | Only after local reliability is stable |

---

## Tools Removed

These choices are no longer part of the core stack:

- Expo
- React Native
- Expo Web
- Zustand
- Expo TaskManager
- EAS build as the main release path
- Cloudflare R2 as a required v1 dependency

They were removed to reduce architecture drift and make the product more secure and focused.

---

## Final Dependency Direction

```text
Core:
- Kotlin
- Jetpack Compose
- Material 3
- Navigation Compose
- ViewModel
- Hilt
- Coroutines
- Flow

Data:
- Room
- SQLite
- DataStore

Network / AI:
- Retrofit
- OkHttp
- Kotlin serialization
- Groq API

Security:
- Android Keystore
- encrypted storage wrapper

Dev:
- Android Studio
- Gradle
- ktlint
- detekt
```
