# 🌊 Soundwave — Modern Local & Streaming Music Player

![Soundwave Banner](/public/favicon.svg)

> **Soundwave** is a high-fidelity, responsive progressive web application (PWA) that seamlessly fuses a local offline audio library with an authorized online music-streaming catalog. Built with React 18, Vite, TypeScript, and Tailwind CSS.

---

## ✨ Key Features

### 🎧 1. HTML5 Audio Playback Engine (Highest Priority)
- **Automatic Next Song Advancement:** Dedicated event-driven playback manager listens to the media element's native `ended` event. Advances smoothly to the next song without race conditions, duplicate event triggers, or fake timers.
- **Repeat Modes:** Cycle through `Repeat Off`, `Repeat All` (loops from end to beginning), and `Repeat One` (replays current song seamlessly from `0:00`).
- **Fisher-Yates Shuffle:** Non-repeating random queue permutations that prevent the current song from repeating prematurely.
- **Bounded Error Recovery:** Automatically skips broken or unavailable tracks with a bounded retry policy (max 3 consecutive skips to avoid infinite loops).
- **Smooth Seeking & Scrubbing:** Scrub bar with hover time preview, elapsed/remaining duration, and keyboard scrub controls.
- **Media Session API:** Integrates with OS and mobile lock screens (artwork, title, artist, album, play/pause/skip/seek).

### 📁 2. Local Audio Library & IndexedDB Persistence
- **Multiple File Import:** Drag-and-drop or file picker for `MP3`, `WAV`, `M4A/AAC`, `OGG`, and `FLAC`.
- **Browser Capability Detection:** Live detection via `HTMLMediaElement.canPlayType` to verify codec support.
- **Client-Side ID3 Tag Parsing:** Parses embedded album cover art, artist, title, album, genre, and duration using `music-metadata-browser`.
- **Zero Server Uploads:** Audio blobs are persisted in browser **IndexedDB** using **Dexie.js**. Songs never leave your device.
- **Storage Quota & Persistent Storage:** Request persistent storage (`navigator.storage.persist()`) with live visual quota estimation meter.

### 🌐 3. Real Online Music Catalog Adapters
- **Jamendo Music Provider:** Real API integration (`v3.0`) for 100% legal, full-length streaming tracks under Creative Commons licenses (`CC BY / CC BY-SA`).
- **Audius Music Provider:** Real decentralized music network integration with full-length streaming tracks by independent creators.
- **iTunes / Apple Music Provider:** Real Apple search API integration. **Strictly and clearly labeled as 30-second preview clips**, duration capped at 30 seconds as required by licensing terms.
- **Royalty-Free Demo Catalog:** Instant, curated, legally playable tracks from open-source audio archives for offline and demo playback.
- **Full-Tracks Filter:** One-click toggle in Discover to hide preview-only tracks.

### 📑 4. Playlists & Favorites
- **Playlists:** Create, rename, delete with safety confirmation, reorder tracks up/down, add entire playlists to queue, and shuffle play.
- **Favorites:** Permanent collection saved in IndexedDB with stable IDs.
- **History:** Automatically tracks recently played songs for the Home page continue listening section.

### 📱 5. Responsive Desktop & Mobile Layout
- **Desktop:** Left navigation sidebar, global search header, persistent bottom player with scrubber and volume, and right slide-over queue drawer.
- **Mobile:** Sticky bottom mini-player, expandable full-screen immersive player with blurred artwork backdrop, and touch-friendly bottom navigation bar.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18, Vite 6, TypeScript 5.7 |
| **Styling** | Tailwind CSS 3 (Near-black `#0a0b0e`, Charcoal `#12141c`, Lime `#22c55e`, Purple `#a855f7`) |
| **Icons** | Lucide React |
| **Audio API** | HTML5 Audio API & Media Session API |
| **Database** | IndexedDB via Dexie.js v4 |
| **Metadata** | `music-metadata-browser` for ID3 tags & embedded APIC artwork |
| **PWA** | Web App Manifest (`manifest.json`) & Service Worker (`sw.js`) |
| **Testing** | Vitest 3, React Testing Library, fake-indexeddb, jsdom |

---

## 🚀 Quickstart & Development

### 1. Prerequisites
- Node.js (v18 or higher recommended; v20 LTS tested)
- npm or pnpm

### 2. Installation
```bash
# Clone or navigate to the project directory
cd soundwave

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Run Automated Test Suite
```bash
npm run test
```
Executes all 20 automated unit and integration tests covering playback advancement, repeat/shuffle logic, provider adapters, preview labeling, and IndexedDB persistence.

### 5. Production Build
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

---

## 🔑 Authorized Music Catalog Configuration

Soundwave includes working demo credentials and direct streaming endpoints out-of-the-box. To configure your own keys:

### Jamendo API
1. Register a free developer account at [developer.jamendo.com](https://developer.jamendo.com/v3.0).
2. Create an application to get a `client_id`.
3. Add your key in Soundwave:
   - Go to **Settings & Storage** > **Music Catalog Configuration** in the app.
   - Enter your `Client ID` and click **Save Key**, or add `VITE_JAMENDO_CLIENT_ID=your_key` in `.env`.

### Audius API
- Audius discovery nodes are decentralized and publicly accessible without mandatory paid subscription keys. Custom host nodes can be configured via `VITE_AUDIUS_HOST`.

### Apple Music & Spotify Integration Notice
- Commercial streaming providers (Spotify, Apple Music) require their official proprietary Web Playback SDKs and active user subscriptions to stream full tracks. In compliance with developer guidelines, Apple search results are strictly labeled as **30-second preview clips**.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Space` | Play / Pause |
| `Shift + →` | Next Track |
| `Shift + ←` | Previous Track |
| `→` | Seek Forward 5s |
| `←` | Seek Backward 5s |
| `↑` | Volume Up 5% |
| `↓` | Volume Down 5% |
| `M` | Toggle Mute |
| `S` | Toggle Shuffle |
| `R` | Cycle Repeat (Off / All / One) |
| `Q` | Toggle Queue Drawer |
| `/` | Focus Global Search |

---

## 🔒 Privacy & Data Policy
Soundwave stores your imported audio files exclusively in your browser's IndexedDB storage. No audio files, personal metadata, or listening activity are uploaded to any external server. Clearing your browser data will delete local files unless persistent storage has been granted.
