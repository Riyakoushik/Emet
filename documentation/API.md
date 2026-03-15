# API.md — External API Reference
## Emet | Groq Integration

---

## v1 API Surface

Emet intentionally has a very small external surface in version 1.

### Required in v1
- Groq Chat Completions API

### Not required in v1
- Public backend
- Multi-user auth server
- Mandatory cloud sync API

---

## Groq Chat API

**Base URL**
```text
https://api.groq.com/openai/v1
```

**Auth header**
```text
Authorization: Bearer <GROQ_API_KEY>
```

---

## Request Shape

```json
{
  "model": "llama-3.3-70b-versatile",
  "stream": true,
  "temperature": 0.85,
  "max_tokens": 1024,
  "messages": [
    {"role": "system", "content": "persona prompt"},
    {"role": "user", "content": "recent user message"}
  ]
}
```

---

## App Request Composition

Before every chat request, the app should assemble:

1. Persona prompt
2. Recent messages
3. Top relevant memories
4. Current user message

This keeps the emotional tone grounded in local data instead of generic responses.

---

## Streaming Handling

The client should:

- open the streaming response,
- parse incremental chunks,
- append tokens to the visible assistant message,
- persist the final response locally after stream completion.

---

## Error Handling

| Code | Meaning | App Action |
|---|---|---|
| 401 | Invalid API key | Ask user to update the key |
| 429 | Rate limited | Retry with backoff and show status |
| 500/503 | Provider issue | Save user message locally and show retry state |
| Network failure | Offline or unstable connection | Preserve draft and show reconnect option |

---

## Security Rules

- Never hardcode the Groq key in source.
- Let the user add or replace the key from Settings.
- Store sensitive values using encrypted local storage.
- Log failures without logging secrets.

---

## Future API Notes

Cloud backup may be added later, but it is intentionally excluded from the required v1 API surface.
