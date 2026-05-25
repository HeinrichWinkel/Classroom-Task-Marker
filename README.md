# 🎓 Classroom Task Marker

Lekkie rozszerzenie do przeglądarki Chrome (Chrome Extension) oparte na architekturze **Manifest V3**, które pomaga w organizacji i wizualnym zarządzaniu zadaniami w Google Classroom poprzez oznaczanie ich odpowiednimi kolorami. 

Dzięki szybkiemu menu po najechaniu myszką możesz łatwo zamienić długą listę zadań w przejrzysty i czytelny panel.

---

## ✨ Funkcje

* **Kolorowe statusy zadań:** Błyskawiczne oznaczanie kafelków dedykowanymi kolorami:
    * 🟡 **Żółty (Domyślny):** Brak oznaczenia / Do przejrzenia
    * 🟢 **Zielony:** Zadanie zrobione (Done)
    * 🔴 **Czerwony:** Do zrobienia na już (To-Do)
* **Logika "Toggle" (Przełączanie statusów):** Jeśli zadanie zostało już oznaczone, ponowne kliknięcie tego samego przycisku usuwa oznaczenie z pamięci i przywraca domyślny, żółtawy kolor rozszerzenia.
* **Kopia zapasowa danych (Eksport/Import):** Dedykowane okienko (Popup) dostępne po kliknięciu ikony rozszerzenia umożliwia pobranie całej konfiguracji oznaczonych zadań do pliku `.json` oraz jej szybkie wczytanie na innym komputerze.
* **Sprytny interfejs Hover UI:** Rozszerzenie idealnie wtapia się w interfejs Google Classroom. Najechanie na ikonę zadania ukrywa ją i płynnie pokazuje przyciski akcji, dzięki czemu interfejs nie jest przeładowany i nie zasłania nagłówków zadań.
* **Trwałe zapisywanie stanu:** Wykorzystuje `chrome.storage.local`, dzięki czemu wtyczka pamięta statusy Twoich zadań nawet po zamknięciu przeglądarki czy odświeżeniu strony.
* **Płynne animacje:** Natywne przejścia CSS (transitions) oraz animacje fade-in dla dynamicznie pojawiających się przycisków.
* **Wsparcie dla dynamicznego ładowania:** Użycie mechanizmu `MutationObserver` gwarantuje, że rozszerzenie działa poprawnie, wyszukując nowe kafelki, nawet gdy Google Classroom doładowuje zadania dynamicznie podczas przewijania strumienia.

---

## 🛠️ Struktura projektu

```text
├── manifest.json       # Konfiguracja rozszerzenia (Manifest V3, wersja 1.5)
├── content.js          # Główna logika, manipulacja DOM i synchronizacja stanu kafelków
├── style.css           # Style układu zadań, zachowanie hover oraz animacje
├── popup.html          # Interfejs okienka rozszerzenia (layout i style kopii zapasowej)
├── popup.js            # Logika obsługi eksportu i importu plików JSON
├── icon16.png          # Ikona interfejsu przeglądarki (mała)
├── icon48.png          # Ikona w menedżerze rozszerzeń (średnia)
└── icon128.png         # Ikona główna / Chrome Web Store (duża)
