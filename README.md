# 🎓 Classroom Task Marker

Lekkie rozszerzenie do przeglądarki Chrome (Chrome Extension), które pomaga w organizacji i wizualnym zarządzaniu zadaniami w Google Classroom poprzez oznaczanie ich odpowiednimi kolorami. 

Dzięki szybkiemu menu po najechaniu myszką możesz łatwo zamienić długą listę zadań w przejrzysty, czytelny panel deweloperski.

---

## ✨ Funkcje

* **Kolorowe statusy zadań:** Błyskawiczne oznaczanie kafelków dedykowanymi kolorami:
    * 🟡 **Żółty (Domyślny):** Brak oznaczenia / Do przejrzenia
    * 🟢 **Zielony:** Zadanie zrobione (Done)
    * 🔴 **Czerwony:** Do zrobienia na już (To-Do)
* **Sprytny interfejs Hover UI:** Rozszerzenie idealnie wtapia się w interfejs Google Classroom. Najechanie na ikonę zadania chowa ją i płynnie pokazuje przyciski akcji, dzięki czemu interfejs nie jest przeładowany i nie zasłania nagłówków zadań.
* **Trwałe zapisywanie stanu:** Wykorzystuje `chrome.storage.local`, dzięki czemu wtyczka pamięta statusy Twoich zadań nawet po zamknięciu przeglądarki czy odświeżeniu strony.
* **Płynne animacje:** Natywne przejścia CSS (transitions) oraz animacje fade-in dla dynamicznie pojawiających się przycisków.
* **Wsparcie dla dynamicznego ładowania:** Użycie mechanizmu `MutationObserver` gwarantuje, że rozszerzenie działa poprawniewyszukując nowe kafelki, nawet gdy Google Classroom doładowuje zadania dynamicznie podczas przewijania strumienia.

---

## 🛠️ Struktura projektu

```text
├── manifest.json       # Konfiguracja rozszerzenia (Manifest V3)
├── content.js          # Główna logika, manipulacja DOM i synchronizacja stanu
├── style.css           # Style układu, zachowanie hover oraz animacje
├── icon16.png          # Ikona interfejsu przeglądarki (mała)
├── icon48.png          # Ikona w menedżerze rozszerzeń (średnia)
└── icon128.png         # Ikona główna / Chrome Web Store (duża)
