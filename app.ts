let tasks: string[] = [];

const input = document.getElementById("todo-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const taskList = document.getElementById("todo-list") as HTMLDivElement;

function addTask(): void {
    const task = input.value.trim();
    if (task === "") return;

    tasks.push(task);
    input.value = "";
    renderTasks();
}

function renderTasks(): void {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i];
        if (taskText === undefined) continue;

        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
    }
}

addButton.addEventListener("click", addTask);
