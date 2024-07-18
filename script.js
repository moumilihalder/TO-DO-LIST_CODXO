document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', () => li.remove());

        li.appendChild(removeBtn);
        li.addEventListener('click', () => li.classList.toggle('completed'));
        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }
});
