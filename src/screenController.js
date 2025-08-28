import { createToDoItem, createToDoList, ToDoListLibrary } from "./todo.js";

const toDoList = createToDoList();
const library = ToDoListLibrary([toDoList]);
library.id = "library";

const startHomeScreen = () => {
    console.log("home screen started");
    //test create some todos
    const todoItem1 = createToDoItem("todoItem1");
    const todoItem2 = createToDoItem("todoItem2");
    const todoItem3 = createToDoItem("todoItem3");
    const activeTodoList = library.getActiveToDoList();
    activeTodoList.addToDo(todoItem1);
    activeTodoList.addToDo(todoItem2);
    activeTodoList.addToDo(todoItem3);
    displayToDos(library);
}

function displayToDos(library) {
    // create and display ToDos in current library
    const todoListContainer = document.getElementById("todo-list-container");
    const todoList = library.getActiveToDoList();
    for (const todoItem of todoList.toDoArray) {
        //function to create todo rendering
        const todoDiv = createTodoDiv(todoItem);
        //append todo to todo-list-continaer
        todoListContainer.appendChild(todoDiv);
    }
}

function createTodoDiv(todoItem) {
    const todoDiv = document.createElement("div");
    todoDiv.textContent = todoItem.title;
    // todoDiv.classList.add("todo");

    todoDiv.id = todoItem.id;

    return todoDiv;
}

export {startHomeScreen};