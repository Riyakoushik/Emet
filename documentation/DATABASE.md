# DATABASE.md — Data Model and Schema
## Emet | Room + SQLite

**Database direction:** local-first, Android-native, single-user.

---

## Engine Choice

Emet uses **Room** as the Android persistence layer on top of **SQLite**. This gives safer queries, migrations, DAO separation, and strong local durability while still allowing direct SQLite search features.

---

## Core Tables

### messages
Stores all chat messages.

```sql
CREATE TABLE messages (
  id TEXT PRIMARY KEY NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('user','assistant')),
  content TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
```

### memories
Stores user-authored memory entries.

```sql
CREATE TABLE memories (
  id TEXT PRIMARY KEY NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  tags TEXT,
  memory_date TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX idx_memories_date ON memories(memory_date DESC);
CREATE INDEX idx_memories_updated ON memories(updated_at DESC);
```

### memories_fts
Provides full-text memory search.

```sql
CREATE VIRTUAL TABLE memories_fts USING fts4(
  id,
  title,
  content,
  tags
);
```

### persona
Stores the active AI persona.

```sql
CREATE TABLE persona (
  id INTEGER PRIMARY KEY CHECK(id = 1),
  name TEXT NOT NULL,
  traits TEXT,
  speaking_style TEXT,
  shared_memories TEXT,
  updated_at INTEGER NOT NULL
);
```

### app_settings
Stores small non-content settings.

```sql
CREATE TABLE app_settings (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
```

---

## Search Sync Strategy

When a memory is inserted, updated, or deleted, the app must update `memories_fts` in the same transaction path so local search results stay accurate.

---

## Suggested Room Models

```kotlin
@Entity(tableName = "messages")
data class MessageEntity(
    @PrimaryKey val id: String,
    val role: String,
    val content: String,
    @ColumnInfo(name = "created_at") val createdAt: Long
)

@Entity(tableName = "memories")
data class MemoryEntity(
    @PrimaryKey val id: String,
    val title: String?,
    val content: String,
    val tags: String?,
    @ColumnInfo(name = "memory_date") val memoryDate: String?,
    @ColumnInfo(name = "created_at") val createdAt: Long,
    @ColumnInfo(name = "updated_at") val updatedAt: Long
)
```

---

## Common Queries

```sql
-- Latest chat page
SELECT * FROM messages
ORDER BY created_at DESC
LIMIT 30 OFFSET ?;

-- Search memories
SELECT m.*
FROM memories m
JOIN memories_fts f ON m.id = f.id
WHERE memories_fts MATCH ?
ORDER BY m.updated_at DESC;

-- Memories by tag
SELECT * FROM memories
WHERE ',' || tags || ',' LIKE '%,' || ? || ',%'
ORDER BY memory_date DESC;

-- Most relevant recent memories
SELECT * FROM memories
ORDER BY updated_at DESC
LIMIT 5;
```

---

## Migrations

Use Room migrations from the first version onward. Never drop user data automatically in production builds.

---

## Backup Scope

The JSON backup should include:

- messages
- memories
- persona
- app_settings

This keeps recovery simple and avoids cloud dependency in v1.
