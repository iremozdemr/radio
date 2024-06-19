document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-task').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    updateCounts();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <input type="checkbox" class="checkbox" onclick="toggleTask(this)">
            <span class="task-text">${taskText}</span>
            <span class="delete" onclick="removeTask(this)">&#x2716;</span>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
        updateCounts();
    }
}

function removeTask(taskElement) {
    const taskItem = taskElement.parentElement;
    taskItem.remove();
    updateCounts();
}

function toggleTask(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed');
    updateCounts();
}

function updateCounts() {
    const taskList = document.getElementById('task-list');
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('li.completed').length;

    document.getElementById('completed-count').innerText = completedTasks;
    document.getElementById('total-count').innerText = totalTasks;
}