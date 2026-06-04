# Helix AI

<p align="center">
  <img src="https://helixai-4-0.github.io/helix_logo.png" alt="Helix AI Interface" width="100%" style="max-width:750px;border-radius:14px;box-shadow:0 10px 40px rgba(0,0,0,0.25);margin:20px 0;">
</p>

> Your personal AI assistant — local & cloud, voice, video & text.

**Helix AI** is an advanced web application and Progressive Web App (PWA) built with a meticulously crafted interface. It bridges privacy and performance by combining local on-device models (powered by WebLLM) with leading cloud providers — OpenAI, Anthropic, Gemini, Pollinations, and more.

---

## 🚀 Key Features

- **🧬 Hybrid Architecture (Local + Cloud):** On-device models via `@mlc-ai/web-llm` with smart lazy loading, alongside robust API integrations for top-tier cloud models.
- **🎙️ Advanced Voice Mode:** Immersive voice interface with a dynamic orb that reacts in real time to listening, processing, and speaking states — with high-fidelity STT and TTS.
- **🖼️ Image Generation & Web Search:** Generate visuals inline within chat threads, or trigger Pro Search for live web results with source citations.
- **📦 Artifacts Panel:** Split-screen or full-screen workspace to display source code, render Markdown, or run interactive previews inside secure iframes with version tracking.
- **📱 Single-File PWA:** Inline manifest (via Blob URLs) and self-contained service worker — installable on desktop and mobile, fully portable.
- **🎨 Premium Design:** *Plus Jakarta Sans* + *Lora* typography, smooth light/dark mode, toast notifications, and contextual bottom sheets for model and voice selection.

---

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3 (custom properties, GPU-accelerated animations), Vanilla JavaScript
- **Local AI Engine:** `@mlc-ai/web-llm` — dynamically imported on first use
- **Markdown & Security:** `marked.js` + `DOMPurify` — all AI output sanitized before DOM injection
- **Typography:** Google Fonts (*Plus Jakarta Sans*, *Lora*)

---

## ⚙️ Local Setup

No build steps required — Helix AI is entirely client-side.

```bash
git clone https://github.com/helixai-4-0/helixai-4-0.github.io.git
cd helixai-4-0.github.io
```

Run a local server (required for Service Workers and ES modules):

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Open [http://localhost:8000](http://localhost:8000), paste your API keys in Settings, or pick a local model to chat with full privacy.

---

## 🔒 Security

- **`safeParse(md)`** — combines `marked.js` with `DOMPurify` to neutralize XSS risks from AI output.
- **`stripPollinationsNotice(text)`** — strips backend watermarks, hidden HTML comments, and generation logs.

---

## 📄 License

MIT License. See `LICENSE` for details.

<p align="center">Made with ❤️ by <a href="https://github.com/Marco3113">Marco3113</a></p>
