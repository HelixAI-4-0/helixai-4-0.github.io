# Helix AI

<p align="center">
  <img src="https://helixai-4-0.github.io/image0.jpg" alt="Helix AI Interface" width="100%" style="max-width: 750px; border-radius: 14px; box-shadow: 0 10px 40px rgba(0,0,0,0.25); margin: 20px 0;">
</p>

> Your personal AI assistant — local & cloud, voice & text.

**Helix AI** is an advanced web application and Progressive Web App (PWA) built with a meticulously crafted user interface. It seamlessly bridges the gap between privacy and performance, combining local on-device models (powered by WebLLM) with the raw intelligence of leading global cloud providers (OpenAI, Anthropic, Gemini, and more).

The application natively integrates text-based chat, immersive voice interaction, AI image generation, real-time web search, and an interactive "Artifacts" panel for live code, markdown, or sandboxed previews.

---

## 🚀 Key Features

- **🧬 Hybrid Architecture (Local + Cloud):** Supports on-device models with smart lazy loading (via `@mlc-ai/web-llm`) to keep initial load times instant, alongside robust API integrations for top-tier cloud models.
- **🎙️ Advanced Voice Mode:** An immersive, dedicated voice interface featuring a dynamic graphical orb that reacts in real time to listening, processing, and speaking states, complete with high-fidelity speech-to-text and text-to-speech.
- **🖼️ Image Generation & Web Search:** Generate visuals directly inline within your chat threads, or trigger "Pro Search" to enrich responses with live web results, comprehensive snippets, and source citations.
- **📦 Artifacts Management (Project Panel):** A split-screen or full-screen workspace to display source code, render Markdown documents, or view interactive live previews inside secure iframes, complete with version tracking.
- **📱 Single-File PWA Ready:** Built-in PWA capabilities utilizing an in-line manifest (via Blob URLs) and self-contained service workers, allowing instant installation on desktop and mobile devices while keeping the source portable.
- **🎨 Premium Design & Micro-interactions:** A sophisticated aesthetic utilizing *Plus Jakarta Sans* and *Lora* typography, buttery-smooth light/dark mode transitions, crisp toast notifications, and contextual bottom sheets for model and voice selection.

---

## 🛠️ Tech Stack

The entire application runs strictly on a lightweight, high-performance frontend stack:

- **Core:** HTML5, CSS3 (Advanced CSS variables for thematic consistency, GPU-accelerated animations), and Vanilla JavaScript.
- **Local AI Engine:** `@mlc-ai/web-llm` (dynamically imported only when a local model is initialized).
- **Markdown & Security:** `marked.js` for markdown parsing, strictly paired with `DOMPurify` to sanitize all AI-generated outputs before DOM injection.
- **Typography:** Google Fonts (*Plus Jakarta Sans*, *Lora*, and *SF Mono* / *Fira Code* for clean code blocks).

---

## 📂 Interface Structure (CSS Scoping)

The codebase is highly organized into semantic CSS sections to ensure easy maintenance and scalability:

1. **Welcome Screen:** The initial onboarding view for model onboarding and first-time configuration.
2. **Topbar & Sidebar:** Navigation layers managing recent chat histories, the project library (Artifacts), and user preferences.
3. **Chat Body & Messages:** Asynchronous conversational UI supporting distinct user/AI message blocks, file attachment chips, and fluid typing indicators.
4. **Input Bar:** An auto-expanding text input area complete with attachment actions and rapid-toggle hardware controls (Microphone, Stop, Send).
5. **Voice Mode Overlay:** A minimalist, dark-mode overlay featuring a pulsating central orb and animated audio spectrum visualizers.
6. **Sheets & Modals:** Bottom-sliding utility menus for swift model switching, API key configurations, and advanced "Pro" features.

---

## ⚙️ Local Setup & Installation

Since Helix AI is an entirely client-side application, no heavy build steps or compilation processes are required.

1. **Clone the repository or save the file:**
   ```bash
   git clone [https://github.com/helixai-4-0/helixai-4-0.github.io.git](https://github.com/helixai-4-0/helixai-4-0.github.io.git)
   cd helixai-4-0.github.io

```
 2. **Run a local development server:**
   To ensure Service Workers and dynamic modules load correctly without CORS restrictions, run the app using a local web server (e.g., VS Code's *Live Server* or via the terminal):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js (npx)
   npx serve .
   
   ```
 3. **Configure and Chat:**
   Open http://localhost:8000 in your browser. Paste your preferred cloud API keys in the settings panel or choose a local model to begin interacting in 100% data privacy.
## 🔒 Security & Data Cleaning
The application includes dedicated utility pipelines to guarantee a pristine, secure UI:
 * **safeParse(md)**: Combines marked.js with DOMPurify to systematically neutralize cross-site scripting (XSS) risks originating from unverified AI outputs.
 * **stripPollinationsNotice(text)**: A custom regex cleaning engine that automatically strips out backend system watermarks, hidden HTML comments (``), and generic generation logs to keep your outputs clean and presentation-ready.
## 📄 License
This project is open-source software licensed under the MIT License. See the LICENSE file for more details.
<p align="center">
Made with ❤ by <a href="https://github.com/Marco3113" target="_blank">Marco3113</a>
</p>
```

```
