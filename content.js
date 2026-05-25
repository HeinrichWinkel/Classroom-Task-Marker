const COLORS = {
    yellow: "rgba(255, 235, 59, 0.25)",
    green: "rgba(76, 175, 80, 0.35)",
    red: "rgba(244, 67, 54, 0.3)"
};

function applyStatus(element, status) {
    element.classList.remove('task-done', 'task-todo');
    
    if (status === 'done') {
        element.style.setProperty('background-color', COLORS.green, 'important');
        element.classList.add('task-done');
    } else if (status === 'todo') {
        element.style.setProperty('background-color', COLORS.red, 'important');
        element.classList.add('task-todo');
    } else {
        element.style.setProperty('background-color', COLORS.yellow, 'important');
    }
}

function initMarker() {
    const tasks = document.querySelectorAll('.n4xnA.JUr7jb');

    tasks.forEach(task => {
        const idContainer = task.closest('[data-stream-item-id]') || task.querySelector('[data-stream-item-id]');
        const icon = task.querySelector('.Cxyznd.IqHgie');
        
        if (!idContainer || !icon || task.querySelector('.marker-wrapper')) return;

        const taskId = idContainer.getAttribute('data-stream-item-id');

        applyStatus(task, 'none');

        const wrapper = document.createElement('div');
        wrapper.className = "marker-wrapper";
        icon.parentNode.insertBefore(wrapper, icon);
        wrapper.appendChild(icon);

        const btnContainer = document.createElement('div');
        btnContainer.className = "marker-container";

        const doneBtn = document.createElement('button');
        doneBtn.className = "marker-btn btn-done";
        doneBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>`;

        const todoBtn = document.createElement('button');
        todoBtn.className = "marker-btn btn-todo";
        todoBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`;

        const handle = (e, status) => {
            e.preventDefault();
            e.stopPropagation();
            
            let newStatus = status;
            
            // Logika przełączania (toggle)
            if (status === 'done' && task.classList.contains('task-done')) {
                newStatus = 'none';
            } else if (status === 'todo' && task.classList.contains('task-todo')) {
                newStatus = 'none';
            }

            if (newStatus === 'none') {
                chrome.storage.local.remove(taskId, () => {
                    applyStatus(task, newStatus);
                });
            } else {
                chrome.storage.local.set({ [taskId]: newStatus }, () => {
                    applyStatus(task, newStatus);
                });
            }
        };

        doneBtn.onclick = (e) => handle(e, 'done');
        todoBtn.onclick = (e) => handle(e, 'todo');

        btnContainer.appendChild(doneBtn);
        btnContainer.appendChild(todoBtn);
        wrapper.appendChild(btnContainer);

        chrome.storage.local.get([taskId], (res) => {
            if (res[taskId]) {
                applyStatus(task, res[taskId]);
            }
        });
    });
}

const observer = new MutationObserver(() => initMarker());
observer.observe(document.body, { childList: true, subtree: true });
initMarker();
