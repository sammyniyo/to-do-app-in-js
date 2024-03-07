const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    let tasks = [];
    const allTasks = listContainer.getElementsByTagName("li");
    for (let i = 0; i < allTasks.length; i++) {
        tasks.push(allTasks[i].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(function(taskText) {
            let li = document.createElement("li");
            li.textContent = taskText;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);
        });
    }
}

showTask();
