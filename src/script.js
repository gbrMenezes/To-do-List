const addButton = document.querySelector('.button-add-task')
const taskInput = document.querySelector('.input-task')
const allList = document.querySelector('.task-list')

let myTaskList = []

function addNewTask() {
    
    myTaskList.push({
        task: taskInput.value,
        done: false
    })

    taskInput.value = ''

    showTasks()
}

function showTasks() {
    
    let newLi = '';

    myTaskList.forEach((task, index) => {
        newLi = newLi + `

        <li class="task ${task.done && "done"}">
            <img class="" src="./src/images/checked.png" alt="botão de tarefa concluída" onclick="checkTask(${index})">
            <p>${task.task}</p>
            <img src="./src/images/trash.png" alt="botão para apagar tarefa" onclick="deletItem(${index})">
        </li>
        `
    })

    allList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myTaskList))

}

function checkTask(index) {
    myTaskList[index].done = !myTaskList[index].done

    showTasks()
}

function deletItem(index) {
    myTaskList.splice(index, 1)

    showTasks()
}

function taskRefresh() {
    const taskLocalStorage = localStorage.getItem('list')

    if(taskLocalStorage) {
        myTaskList = JSON.parse(taskLocalStorage)
    }

    showTasks()
}

taskRefresh()
addButton.addEventListener('click', addNewTask)