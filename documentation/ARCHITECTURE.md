# ARCHITECTURE.md — System Architecture
## Emet | Native Android Edition

---

## Overview

Emet is a **single-user native Android application** with a local-first architecture. The phone is the source of truth. Core data lives in a local database, and online services are used only for AI inference when the user sends a message.

```text
User
  |
Jetpack Compose UI
  |
ViewModel
  |
Repository
  |---------------------> Groq API
  |
Room / SQLite
  |
Local backup export
```

---

## Architecture Goals

- Keep the first release Android-only.
- Keep the trust surface small.
- Make local data the source of truth.
- Avoid unnecessary servers.
- Preserve emotional continuity through reliable persistence.

---

## Layers

### 1. UI Layer
Jetpack Compose renders chat, memories, persona setup, and settings screens. Each major screen owns a ViewModel that exposes immutable UI state and receives user actions.

### 2. Domain Layer
The domain layer holds message sending rules, memory ranking, persona prompt assembly, backup validation, and privacy rules. This keeps emotional behavior and business logic out of UI code.

### 3. Data Layer
Room manages local entities, DAOs, and migrations on top of SQLite. The database stores messages, memories, persona configuration, and small app-level settings needed for the experience.

### 4. Remote AI Layer
A small Groq client sends the system prompt, recent messages, and relevant memories to the model. Streaming responses are parsed incrementally and surfaced back to the UI as chat tokens.

### 5. Security Layer
Sensitive settings use encrypted local storage with Android Keystore-backed protection. The app never hardcodes keys in source and should allow the user to rotate or replace the AI key from Settings.

---

## Message Flow

```text
1. User sends a message
2. Message is saved locally immediately
3. Repository loads persona + recent messages + top memories
4. Request is sent to Groq
5. Streaming chunks are parsed token by token
6. UI updates while response is arriving
7. Final assistant message is saved locally
```

This flow ensures the conversation feels alive while still preserving local history even if the network becomes unstable.

---

## Memory Flow

```text
1. User creates or edits a memory
2. Room writes the record locally
3. SQLite FTS index is refreshed
4. Search results become available immediately
5. Relevant memories can later be injected into chat context
```

---

## Backup Flow

```text
1. User taps Export Backup
2. App serializes local tables to JSON
3. File is saved to user-approved local storage
4. Import reads JSON, validates schema, and restores records
```

Cloud backup is intentionally not required in v1.

---

## Package Structure

```text
com.emet
├── ui
│   ├── chat
│   ├── memories
│   ├── settings
│   └── components
├── domain
│   ├── model
│   ├── usecase
│   └── mapper
├── data
│   ├── local
│   │   ├── dao
│   │   ├── entity
│   │   ├── database
│   │   └── search
│   ├── remote
│   │   ├── groq
│   │   └── dto
│   ├── repository
│   └── backup
├── security
├── di
└── MainActivity.kt
```

---

## Key Decisions

| Decision | Chosen | Not Chosen | Why |
|---|---|---|---|
| Platform | Native Android | Cross-platform stack | Best focus and control |
| Database | Room + SQLite | Cloud-first DB | Local-first privacy and durability |
| AI | Groq | Self-hosted LLM in v1 | Faster to ship without device-model complexity |
| Backup | Local export/import | Required cloud sync | Smaller attack surface for v1 |
| App scope | One user | Multi-user | Product is deeply personal |
