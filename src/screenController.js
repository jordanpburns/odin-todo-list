import { createToDoItem, createToDoList, ToDoListLibrary } from "./todo.js";

const toDoList = createToDoList();
const library = ToDoListLibrary([toDoList]);
library.id = "library";

const startHomeScreen = () => {
    
}
export {startHomeScreen};