import { createToDoItem, createToDoList, ToDoListLibrary } from "./todo.js";

const toDoList = createToDoList();
const library = ToDoListLibrary([toDoList]);
library.id = "library";

const startHomeScreen = () => {
    console.log("home screen started");
    //test create some todos
    // const todoItem1 = createToDoItem("todoItem1");
    // const todoItem2 = createToDoItem("todoItem2");
    // const todoItem3 = createToDoItem("todoItem3");
    const activeTodoList = library.getActiveToDoList();
    // activeTodoList.addToDo(todoItem1);
    // activeTodoList.addToDo(todoItem2);
    // activeTodoList.addToDo(todoItem3);
    displayToDos(library);
}

function updateTodoItemCount(todoList) {
    const todoItemCount = document.getElementById("todo-item-count");
    todoItemCount.textContent = todoList.toDoArray.length;
}

function updateTodoListName(todoList) {
    // add todoList title and number of todos
    const todoListTitle = document.getElementById("todo-list-title");
    todoListTitle.textContent = todoList.name;
}

function displayToDos(library) {

    // get current todoList
    const todoList = library.getActiveToDoList();

    // clear todo-list-container and add all todoItems to screen
    const todoListContainer = document.getElementById("todo-list-container");  

    for (const todoItem of todoList.toDoArray) {
        //function to create todo rendering
        const todoDiv = createTodoDiv(todoItem);
        //append todo to todo-list-continaer
        todoListContainer.appendChild(todoDiv);
    }
    updateTodoItemCount(todoList);
    updateTodoListName(todoList);
}

function createTodoDiv(todoItem) {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = todoItem.title;
    todoDiv.classList.add("todo-item");

    todoDiv.id = todoItem.id;

    return todoDiv;
}

const newTodoItemButton = document.getElementById("new-todo-item-button");
newTodoItemButton.addEventListener("click", clickPlusButton);

function clickPlusButton(event) {
    event.stopPropagation();
    newTodoItemButton.disabled = true;
    const todoDiv = document.createElement("div");
    const nameInput = document.createElement("input");

    todoDiv.appendChild(nameInput);
    todoDiv.id = "current-div";

    const todoListContainer = document.getElementById("todo-list-container");
    todoListContainer.appendChild(todoDiv);

    document.addEventListener('click', clickOutsideTodo);

    function clickOutsideTodo(event2) {
        // Check if the clicked element is NOT the target element AND NOT a descendant of the target element
        if (event2.target !== todoDiv && !todoDiv.contains(event2.target)) {
            // This code will execute when a click occurs anywhere other than 'myTargetElement'
            // or its children.    
                const todoItem = createToDoItem(nameInput.value);
                const todoList = library.getActiveToDoList();
                todoList.addToDo(todoItem);

                const todoDivReplacement = createTodoDiv(todoItem);
                todoListContainer.replaceChild(todoDivReplacement, todoDiv);

                updateTodoItemCount(todoList);
                newTodoItemButton.disabled = false;
                document.removeEventListener("click", clickOutsideTodo);
        }
    }
}


export {startHomeScreen};