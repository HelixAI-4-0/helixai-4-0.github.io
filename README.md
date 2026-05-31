
```markdown
# Helix AI

<p align="center">
  <img src="image0.jpg" alt="Helix AI Interface" width="100%" style="max-width: 800px; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
</p>

> Your personal AI assistant — local & cloud, voice & text[span_0](start_span)[span_0](end_span).

**Helix AI** is an advanced web application and Progressive Web App (PWA) built with a meticulously crafted user interface[span_1](start_span)[span_1](end_span). It seamlessly bridges the gap between privacy and performance, combining local on-device models (powered by WebLLM) with the raw intelligence of leading global cloud providers (OpenAI, Anthropic, Gemini, and more)[span_2](start_span)[span_2](end_span).

The application natively integrates text-based chat, immersive voice interaction, AI image generation, real-time web search, and an interactive "Artifacts" panel for live code, markdown, or sandboxed previews[span_3](start_span)[span_3](end_span).

---

## 🚀 Key Features

* **🧬 Hybrid Architecture (Local + Cloud):** Supports on-device models with smart lazy loading (via `@mlc-ai/web-llm`) to keep initial load times instant, alongside robust API integrations for top-tier cloud models[span_4](start_span)[span_4](end_span).
* **🎙️ Advanced Voice Mode:** An immersive, dedicated voice interface featuring a dynamic graphical orb that reacts in real time to listening, processing, and speaking states, complete with high-fidelity speech-to-text and text-to-speech[span_5](start_span)[span_5](end_span).
* **🖼️ Image Generation & Web Search:** Generate visuals directly inline within your chat threads, or trigger "Pro Search" to enrich responses with live web results, comprehensive snippets, and source citations[span_6](start_span)[span_6](end_span).
* **📦 Artifacts Management (Project Panel):** A split-screen or full-screen workspace to display source code, render Markdown documents, or view interactive live previews inside secure iframes, complete with version tracking[span_7](start_span)[span_7](end_span).
* **📱 Single-File PWA Ready:** Built-in PWA capabilities utilizing an in-line manifest (via Blob URLs) and self-contained service workers, allowing instant installation on desktop and mobile devices while keeping the source portable[span_8](start_span)[span_8](end_span).
* **🎨 Premium Design & Micro-interactions:** A sophisticated aesthetic utilizing *Plus Jakarta Sans* and *Lora* typography, buttery-smooth light/dark mode transitions, crisp toast notifications, and contextual bottom sheets for model and voice selection[span_9](start_span)[span_9](end_span).

---

## 🛠️ Tech Stack

The entire application runs strictly on a lightweight, high-performance frontend stack:

* **Core:** HTML5, CSS3 (Advanced CSS variables for thematic consistency, GPU-accelerated animations), and Vanilla JavaScript[span_10](start_span)[span_10](end_span).
* **Local AI Engine:** `@mlc-ai/web-llm` (dynamically imported only when a local model is initialized)[span_11](start_span)[span_11](end_span).
* **Markdown & Security:** `marked.js` for markdown parsing, strictly paired with `DOMPurify` to sanitize all AI-generated outputs before DOM injection[span_12](start_span)[span_12](end_span).
* **Typography:** Google Fonts (*Plus Jakarta Sans*, *Lora*, and *SF Mono* / *Fira Code* for clean code blocks)[span_13](start_span)[span_13](end_span).

---

## 📂 Interface Structure (CSS Scoping)

The codebase is highly organized into semantic CSS sections to ensure easy maintenance and scalability[span_14](start_span)[span_14](end_span):

1. **Welcome Screen:** The initial onboarding view for model onboarding and first-time configuration[span_15](start_span)[span_15](end_span).
2. **Topbar & Sidebar:** Navigation layers managing recent chat histories, the project library (Artifacts), and user preferences[span_16](start_span)[span_16](end_span).
3. **Chat Body & Messages:** Asynchronous conversational UI supporting distinct user/AI message blocks, file attachment chips, and fluid typing indicators[span_17](start_span)[span_17](end_span).
4. **Input Bar:** An auto-expanding text input area complete with attachment actions and rapid-toggle hardware controls (Microphone, Stop, Send)[span_18](start_span)[span_18](end_span).
5. **Voice Mode Overlay:** A minimalist, dark-mode overlay featuring a pulsating central orb and animated audio spectrum visualizers[span_19](start_span)[span_19](end_span).
6. **Sheets & Modals:** Bottom-sliding utility menus for swift model switching, API key configurations, and advanced "Pro" features[span_20](start_span)[span_20](end_span).

---

## ⚙️ Local Setup & Installation

Since Helix AI is an entirely client-side application, no heavy build steps or compilation processes are required[span_21](start_span)[span_21](end_span).

1. **Clone the repository or save the file:**
```bash
   git clone [https://github.com/Marco3113/helix-ai.git](https://github.com/Marco3113/helix-ai.git)
   cd helix-ai

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
 * **stripPollinationsNotice(text)**: A custom regex cleaning engine that automatically strips out backend system watermarks, hidden HTML comments (<!-- ... -->), and generic generation logs to keep your outputs clean and presentation-ready.
## 📄 License
This project is open-source software licensed under the MIT License. See the LICENSE file for more details.
<p align="center">
Made with ❤ by <a href="https://github.com/Marco3113">Marco3113</a>
</p>
```

```
