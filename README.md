# 🎓 Classroom Task Marker

![Preview](logo.png)

A lightweight Chrome Extension built on the **Manifest V3** architecture that helps you organize and visually track your Google Classroom assignments by color-coding them based on their current status. 

With a simple hover and click, you can turn overwhelming task lists into a clean, scannable dashboard.

---

## ✨ Features

* **Color-Coded Statuses:** Instantly mark tasks with specific colors to denote their state:
    * 🟡 **Yellow (Default):** Unmarked / Review needed
    * 🟢 **Green:** Task Done
    * 🔴 **Red:** To-Do / Urgent
* **Toggle Status Logic:** If a task is already marked, clicking the same status button again will **unmark it**, removing the ID from storage and reverting it to the extension's default yellowish highlight.
* **Data Backup (Export/Import):** A dedicated popup interface allows you to download your entire configuration of marked tasks into a `.json` file and quickly restore it when switching computers or browsers.
* **Intelligent Hover UI:** The extension seamlessly integrates with the Google Classroom interface. Hovering over a task's icon reveals action buttons without cluttering your screen or obscuring task names.
* **Persistent Storage:** Uses `chrome.storage.local` to remember your task states across browser sessions and page reloads.
* **Smooth Animations:** Native feel with clean CSS transitions and fade-in animations for custom elements.
* **Dynamic Loading Support:** Built with a `MutationObserver` to ensure new tasks are automatically tracked even when Google Classroom dynamically loads or updates stream contents.

---

## 🛠️ Project Structure

```text
├── manifest.json       # Extension configuration (Manifest V3, version 1.5)
├── content.js          # Core logic, DOM manipulation, and tile state sync
├── style.css           # Layout structures, hover behaviors, and animations
├── popup.html          # Extension popup UI (layout and styles for backup controls)
├── popup.js            # Backup logic handling JSON file export and import
├── icon16.png          # Browser UI icon (small)
├── icon48.png          # Extension management icon (medium)
└── icon128.png         # Chrome Web Store icon (large)
