"use strict";
const inputElement = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
function addTask() {
    const task = inputElement.value.trim();
    if (task === "")
        return;
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Deletar";
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    inputElement.value = "";
}
addButton.addEventListener('click', addTask);
inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
