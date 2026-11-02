let tasks = [];
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("todo-list");
function addTask() {
    const task = input.value.trim();
    if (task === "")
        return;
    tasks.push(task);
    input.value = "";
    renderTasks();
}
function renderTasks() {
    taskList.innerHTML = "";
    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
}
addButton.addEventListener("click", addTask);