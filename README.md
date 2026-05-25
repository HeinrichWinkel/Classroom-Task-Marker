# 🎓 Classroom Task Marker

A lightweight Chrome Extension that helps you organize and visually track your Google Classroom assignments by color-coding them based on their current status. 

With a simple hover and click, you can turn overwhelming task lists into a clean, scannable dashboard.

---

## ✨ Features

* **Color-Coded Statuses:** Instantly mark tasks with specific colors to denote their state:
    * 🟡 **Yellow (Default):** Unmarked / Review needed
    * 🟢 **Green:** Task Done
    * 🔴 **Red:** To-Do / Urgent
* **Intelligent Hover UI:** The extension seamlessly integrates with the Google Classroom interface. Hovering over a task's icon reveals action buttons without cluttering your screen or obscuring task names.
* **Persistent Storage:** Uses `chrome.storage.local` to remember your task states across browser sessions and page reloads.
* **Smooth Animations:** Native feel with clean CSS transitions and fade-in animations for custom elements.
* **Dynamic Loading Support:** Built with a `MutationObserver` to ensure new tasks are automatically tracked even when Google Classroom dynamically loads or updates stream contents.

---

## 🛠️ Project Structure

```text
├── manifest.json       # Extension configuration (Manifest V3)
├── content.js          # Core logic, DOM manipulation, and state sync
├── style.css           # Layout structures, hover behaviors, and animations
├── icon16.png          # Browser UI icon (small)
├── icon48.png          # Extension management icon (medium)
└── icon128.png         # Chrome Web Store icon (large)
