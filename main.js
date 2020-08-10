// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const clearList = document.querySelector('.clearlist');
const lis = todoList.getElementsByClassName("todo");
const clear = document.getElementById('clear');
clear.style.display = "none";

const filterOption = document.querySelector('#todos');

// EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletecheck);
clearList.addEventListener('click', removeall);
filterOption.addEventListener('click', filterTodo);


// FUNCTIONS

// add item
function addTodo(event) {
    event.preventDefault();
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    // delete
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // attach to list
    todoList.appendChild(todoDiv);

    // clear placeholder
    todoInput.value = "";
    clear.style.display = "inline";


}

// delete and check items
function deletecheck(e) {
    const item = e.target;
    // delete
    if (item.classList[0] === 'trash-btn') {
        const todoremove = item.parentElement;
        todoremove.classList.add("deleteAnim");
        todoremove.addEventListener('transitionend', function() {
            todoremove.remove();

        });


    }
    // check
    if (item.classList[0] === 'completed-btn') {
        const todocheck = item.parentElement;
        todocheck.classList.toggle('checked');
    }

}

// clear list
function removeall() {
    while (lis.length > 0) {
        todoList.removeChild(lis[0]);
        clear.style.display = "none";
    }
}


// create a filter according to stuff
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";

                } else {
                    todo.style.display = "none";
                }
                break;
            case "remaining":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "none";

                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    });


}