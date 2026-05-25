document.getElementById('export-btn').addEventListener('click', () => {
    chrome.storage.local.get(null, (items) => {
        if (Object.keys(items).length === 0) {
            showStatus('Brak zapisanych zadań do wyeksportowania.');
            return;
        }
        const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `classroom-tasks-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showStatus('Wyeksportowano pomyślnie!');
    });
});

document.getElementById('import-btn').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            chrome.storage.local.set(data, () => {
                showStatus('Zapisano! Odśwież stronę Classroom.');
            });
        } catch (err) {
            showStatus('Błąd: Niepoprawny plik konfiguracyjny.');
        }
    };
    reader.readAsText(file);
});

function showStatus(text) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = text;
    setTimeout(() => { statusDiv.textContent = ''; }, 3500);
}