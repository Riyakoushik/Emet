# CONTRIBUTING.md — Solo Development Standards
## Emet | Native Android Edition

---

## Purpose

This repository is a solo-maintained private project. This file exists to keep development consistent, safe, and maintainable.

---

## Local Setup

```bash
git clone https://github.com/yourname/emet.git
cd emet
./gradlew assembleDebug
./gradlew installDebug
```

Open the project in Android Studio for emulator, profiler, signing, and log inspection.

---

## Branching Strategy

```text
main                     stable only
feature/chat-streaming
feature/memory-search
feature/app-lock
fix/backup-import
refactor/repository-split
```

Rules:
- `main` must always be installable.
- One branch per meaningful change.
- Merge only after manual device testing.
- Add a changelog entry for every important merge.

---

## Commit Format

Use:

```text
type: short description
```

Examples:
- `feat: add memory search screen`
- `fix: prevent duplicate assistant save on reconnect`
- `docs: rewrite architecture for native android`
- `refactor: split groq client from repository`

---

## Code Standards

### Kotlin
- Prefer immutable state.
- Avoid global mutable singletons.
- Keep UI logic out of repositories.
- Keep network DTOs separate from domain models.

### Compose
- Keep composables small and previewable.
- Hoist state where practical.
- Keep side effects explicit.

### Data
- DAO operations must be safe and testable.
- Never destroy production data with fallback migration shortcuts.
- Keep backup import validation strict.

---

## Quality Gates

Before merging to `main`:

- Project builds in Android Studio.
- Debug build installs on a device or emulator.
- Chat persistence works across app restart.
- No secrets are present in tracked files.
- No crash in core chat, memories, and settings flows.
- Changelog updated.
- Roadmap updated if scope changed.

---

## Security Rules for Development

- Never commit secrets.
- Never paste real keys into screenshots.
- Never log auth headers.
- Test backup import with invalid files.
- Treat privacy regressions as high priority bugs.

---

## Recommended Tooling

- Android Studio
- Logcat
- Android Profiler
- ktlint
- detekt
