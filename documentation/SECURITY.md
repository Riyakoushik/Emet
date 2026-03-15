# SECURITY.md — Security and Privacy
## Emet | Native Android Edition

---

## Security Model

Emet is a private single-user Android app. Its main security priorities are:

1. Prevent secret leakage.
2. Keep personal content local by default.
3. Minimize network exposure.
4. Reduce accidental data loss.
5. Add a second privacy layer beyond the phone lock when possible.

---

## Core Rules

- No hardcoded API keys in source control.
- No analytics SDKs.
- No public user accounts.
- No unnecessary cloud dependency in v1.
- Local database is the source of truth.

---

## Secret Handling

### Allowed
- User enters the Groq key inside Settings.
- Key is stored in encrypted local storage.
- App can validate the key with a lightweight request.

### Not Allowed
- Groq key committed to git.
- Groq key printed to logs.
- Secrets shipped in plain text assets.

---

## Local Data Protection

| Area | Protection |
|---|---|
| App files | Android app sandbox |
| Sensitive settings | Encrypted local storage |
| Recovery file | Manual export only, user-controlled |
| Optional app access | PIN or biometric lock |

---

## Network Security

- All remote calls must use HTTPS.
- Certificate validation must remain enabled.
- The app should fail safely when the network is unstable.
- Conversation data sent to AI should be limited to what is needed for the current reply.

---

## Threat Model

| Threat | Risk | Mitigation |
|---|---|---|
| API key accidentally exposed in repo | High | Never commit secrets, rotate immediately |
| Someone opens the app on an unlocked phone | Medium | Add optional app lock |
| User loses the phone | Medium | Rely on device security and avoid forced cloud storage |
| Network failure during response | Medium | Save user message locally before remote call |
| Malformed backup import | Medium | Validate schema before restore |

---

## Hardening Checklist

### Before every release
- Confirm no secrets in git history or source files.
- Confirm logs do not print request headers or tokens.
- Confirm backup import rejects invalid files.
- Confirm the app works without analytics.
- Confirm local data survives normal restart.

### For the secure build
- Enable optional app lock.
- Keep export/import behind explicit confirmations.
- Show the user when AI is online vs unavailable.
- Avoid over-sharing memory context in requests.

---

## Privacy Promise

Emet should behave like a private memory vault with optional online AI, not like a cloud-first product. Convenience must never silently override privacy.
