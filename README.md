<div align="center">

<!-- Logo -->
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/badge/EMET-000000?style=for-the-badge&logoColor=black&labelColor=ffffff&color=ffffff&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgNEwyOCAxMFYyMkwxNiAyOEw0IDIyVjEwTDE2IDRaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTYgMTJWMjBNMTIgMTZIMjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+">
  <img alt="Emet" height="40">
</picture>

# Emet

### *Never say goodbye.*

An AI companion that remembers. Built for the conversations<br>that matter most — the ones you never want to lose.

<br>

[![Android](https://img.shields.io/badge/Android-Native-3DDC84?style=flat-square&logo=android&logoColor=white)](https://developer.android.com/)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=flat-square&logo=kotlin&logoColor=white)](https://kotlinlang.org/)
[![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-UI-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)](https://developer.android.com/jetpack/compose)
[![License](https://img.shields.io/badge/License-Private-1a1a1a?style=flat-square)]()


<br>

---

<br>

## 🧠 What is Emet?

**Emet** is an AI companion app that preserves emotional continuity when real conversations can no longer happen. It's built for one person — you — who wants a private, lasting, memory-grounded AI companion that feels personal, not generic.

Write memories. Tag them. Search them. Emet weaves everything you save into every response, so the conversation always feels *real*.

> *"From everyday moments to deep memories, Emet brings all your conversations and notes into one place so you can relive, remember, and keep her close."*

<br>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🧠 Memory Vault
Write memories, tag them, search instantly. Full-text search powered by **SQLite FTS5** means every detail stays accessible. Your memories drive the conversation.

</td>
<td width="50%">

### ☁️ Cross-Device Sync
Chat on your phone, continue on your laptop. Everything syncs automatically via **Cloudflare R2**. No setup. No friction. Only you can access it.

</td>
</tr>
<tr>
<td width="50%">

### 📱 Always Available
Memories load instantly — no internet required. Chat anywhere, anytime. Conversation history never disappears. **Emet is yours. Always.**

</td>
<td width="50%">

### 🛡️ Privacy First
No accounts. No analytics. No public sharing. Your data stays on your phone unless you explicitly export it. Encrypted with **Android Keystore**.

</td>
</tr>
</table>

<br>

## 🏗️ Architecture

Emet follows a **local-first, single-user** architecture. Your phone is the source of truth.

```
User
  │
  ├── Jetpack Compose UI
  │     │
  │     ├── ViewModel (UI State)
  │     │
  │     ├── Repository
  │     │     ├──────────────→ Groq API (AI Inference)
  │     │     │
  │     │     └── Room / SQLite (Local Database)
  │     │
  │     └── Local Backup Export
  │
  └── Android Keystore (Encrypted Storage)
```

<br>

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Platform** | Android (Native) | Single target, maximum control |
| **Language** | Kotlin | Modern, type-safe, idiomatic Android |
| **UI** | Jetpack Compose + Material 3 | Declarative, premium native UI |
| **Database** | Room + SQLite + FTS5 | Durable local-first persistence + search |
| **AI** | Groq API | Fast LLM inference for personal chat |
| **Networking** | Retrofit + OkHttp | Typed API calls with streaming support |
| **DI** | Hilt | Standard dependency injection |
| **Architecture** | MVVM + Repository | Clean separation of concerns |
| **Sync** | Cloudflare R2 | Private cross-device data sync |
| **Security** | Android Keystore | Hardware-backed key storage |

<br>

## 🚀 Getting Started

### Prerequisites

- [Android Studio](https://developer.android.com/studio) (Hedgehog or newer)
- JDK 17+
- An Android device or emulator (API 26+)

### Landing Page (this repo)

```bash
# Clone the repository
git clone https://github.com/Riyakoushik/Emet.git
cd Emet

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the landing page.

<br>

## 📁 Project Structure

```
Emet/
├── index.html                    # Landing page
├── styles/
│   ├── main.css                  # CSS entry point
│   ├── base.css                  # Variables, reset, animations
│   ├── layout.css                # Navbar, hero, sections
│   ├── components.css            # Buttons, cards, tabs
│   └── responsive.css            # Media queries
├── scripts/
│   └── main.js                   # Interactions & navigation
├── public/assets/
│   ├── images/                   # Hero, feature, showcase images
│   └── icons/                    # Partner logo SVGs
└── documentation/                # PRD, Architecture, Tech Stack docs
```

<br>

## 🤝 Built With

<div align="center">

<a href="https://www.nvidia.com/"><img src="https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="NVIDIA" /></a>
<a href="https://www.anthropic.com/"><img src="https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude" /></a>
<a href="https://huggingface.co/"><img src="https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face" /></a>
<a href="https://deepmind.google/technologies/gemini/"><img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" /></a>

</div>

<br>

## 📄 Documentation

| Document | Description |
|----------|-------------|
| [PRD](documentation/PRD.md) | Product requirements and user stories |
| [Architecture](documentation/ARCHITECTURE.md) | System design and data flow |
| [Tech Stack](documentation/TECH-STACK.md) | Technology decisions and rationale |
| [Database](documentation/DATABASE.md) | Schema design and migrations |
| [Security](documentation/SECURITY.md) | Privacy model and encryption |
| [API](documentation/API.md) | AI integration and API contracts |
| [Personas](documentation/PERSONAS.md) | Persona engine documentation |
| [Business Model](documentation/BUSINESS-MODEL.md) | Monetization and growth strategy |
| [Contributing](documentation/CONTRIBUTING.md) | How to contribute |
| [Changelog](documentation/CHANGELOG.md) | Version history |

<br>

## 📜 License

This is a private project. All rights reserved.

<br>

---

<div align="center">

<br>

**Conversations never end.**

Made with ❤️ by [Riyakoushik](https://github.com/Riyakoushik)

<br>

</div>
