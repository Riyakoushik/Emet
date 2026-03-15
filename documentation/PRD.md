# PRD.md — Product Requirements Document
## Emet | Version 1.0 | Native Android

**Status:** Active

---

## 1. Problem Statement

Emet exists to preserve emotional continuity when real conversations can no longer continue. It is built for one person who wants a private, lasting, memory-grounded AI companion that feels personal rather than generic.

---

## 2. Product Goals

| Goal | Success Metric |
|---|---|
| Replies feel emotionally personal | Persona and memory context shape every response |
| Core data is never casually lost | Messages and memories survive app restarts |
| Privacy is stronger than convenience | No accounts, no analytics, no public sharing |
| App feels native and stable on Android | Smooth chat, fast open, low crash risk |
| Search feels instant | Memory lookup is local and responsive |

---

## 3. Primary User

A single owner uses Emet on an Android phone as a private emotional memory space. There are no secondary public users in v1.

---

## 4. User Stories

### Chat
- As the user, I want to send a message and see the reply appear progressively so the conversation feels alive.
- As the user, I want the reply to sound like her rather than like a generic assistant.
- As the user, I want my previous chats to remain available after I close and reopen the app.

### Memories
- As the user, I want to save meaningful memories, dates, and notes permanently.
- As the user, I want to search saved memories by keywords and tags.
- As the user, I want the AI to use those memories when responding.

### Privacy
- As the user, I want no account creation and no public profile.
- As the user, I want my local data to stay on my phone unless I explicitly export it.
- As the user, I want a stronger privacy option such as an app lock.

### Recovery
- As the user, I want to export a backup file so I can restore the app later on a new device.

---

## 5. Functional Requirements

### F-01 Chat Interface (P0)
- Native Android chat screen built with Compose.
- User messages and AI messages clearly separated.
- Streaming text appears incrementally.
- Loading and failure states are visible.

### F-02 Persona Engine (P0)
- Editable fields for name, traits, tone, and important shared memories.
- Persona changes affect the next AI response.
- Persona is stored locally.

### F-03 Memory Vault (P0)
- Create, read, update, and delete memories.
- Store title, content, tags, and memory date.
- Sort memories by date and recency.

### F-04 Memory Search (P1)
- Full-text search over saved memories.
- Tag-based filtering.
- Search results shown locally without network dependency.

### F-05 Context Injection (P1)
- Relevant memories are ranked and attached to AI requests.
- Recent chat history and persona context are included.
- Context window is capped to protect speed and cost.

### F-06 Settings and Secrets (P0)
- User can enter or replace a Groq API key from Settings.
- Sensitive values are stored using encrypted local storage.
- App can show whether the key is valid.

### F-07 Backup and Restore (P1)
- Export all app data to a JSON backup.
- Import a valid backup file to restore history, persona, and memories.
- Import must validate schema before writing.

### F-08 Privacy Guardrails (P1)
- No analytics SDK.
- No login system.
- Optional app lock with PIN or biometrics.

---

## 6. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Cold start | Feels fast on a normal Android phone |
| Stability | No data loss on normal app restart |
| Search latency | Feels instant for personal-scale data |
| Privacy | No hidden telemetry |
| Maintainability | Solo-developer manageable |
| Cost | $0 or near $0 for personal usage |

---

## 7. Out of Scope for v1

- Multi-user support
- Web app
- Mandatory cloud sync
- Social sharing
- Voice notes
- Photo/video memories
- Push notifications
- On-device LLM inference

---

## 8. Acceptance Criteria

- Chat messages persist after app restart.
- Persona settings affect replies.
- Memories can be added, edited, deleted, and searched.
- AI replies stream progressively.
- No credentials are hardcoded in source.
- Backup export produces a valid restore file.
- App works as a private Android-only experience.
