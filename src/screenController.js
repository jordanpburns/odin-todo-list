import { createToDoItem, createToDoList, ToDoListLibrary } from "./todo.js";

const toDoList = createToDoList();
const library = ToDoListLibrary([toDoList]);
library.id = "library";

const startHomeScreen = () => {
    const content = document.getElementById("content");
    content.classList.add("grid-container");

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.classList.add("flex-container");
    content.appendChild(sidebar);

    const newToDoItemButton = document.createElement("button");
    newToDoItemButton.id = "new-to-do-item-button";
    newToDoItemButton.textContent = "New ToDo";
    sidebar.appendChild(newToDoItemButton);

    const newListButton = document.createElement("button");
    newListButton.id = "new-list-button";
    newListButton.textContent = "New ToDo List";
    newListButton.addEventListener("click", createNewToDoList);
    sidebar.appendChild(newListButton);

    const yourListsButton = document.createElement("button");
    yourListsButton.id = "your-lists-button";
    yourListsButton.textContent = "Your Lists";
    yourListsButton.addEventListener("click", seeYourLists)
    sidebar.appendChild(yourListsButton);

    const toDoAndNameContainer = document.createElement("div");
    toDoAndNameContainer.id = "to-do-and-name-container";
    content.appendChild(toDoAndNameContainer);

    const currentListName = document.createElement("div");
    currentListName.id = "current-list-name";
    toDoAndNameContainer.appendChild(currentListName);    

    const toDoContainer = document.createElement("div");
    toDoContainer.id = "to-do-container";
    toDoContainer.classList.add("flex-container");
    toDoAndNameContainer.appendChild(toDoContainer);

    const header = document.createElement("div");
    header.id = "header";
    header.classList.add("grid-container");

    const toDoLogo = document.createElement("div");
    toDoLogo.textContent = "TODO APP";
    toDoLogo.id = "to-do-logo";

    header.appendChild(toDoLogo);

    content.appendChild(header);

    const nav = document.createElement("nav");
    nav.id = "nav";
    header.appendChild(nav);

    const myAccountButton = document.createElement("button");
    myAccountButton.id = "my-account-button";
    myAccountButton.textContent = "My Account";
    nav.append(myAccountButton);

    const signOutButton = document.createElement("button");
    signOutButton.id = "sign-out-button";
    signOutButton.textContent = "Sign Out";
    nav.append(signOutButton);


    function addToDoItem() {
        newToDoItemButton.disabled = true;
        const toDoItemContainer = document.createElement("div");
        toDoItemContainer.classList.add("create-to-do-item-container");
        toDoItemContainer.classList.add("flex-container");

        const title = document.createElement("input");
        title.placeholder = "title";
        title.classList.add("to-do-title-input");
        toDoItemContainer.appendChild(title);

        const description = document.createElement("input");
        description.placeholder = "description";
        description.classList.add("add-to-do-description-input");
        toDoItemContainer.appendChild(description);

        const dueDatePriorityContainer = document.createElement('div');
        dueDatePriorityContainer.classList.add("add-to-do-due-date-priority-container");
        dueDatePriorityContainer.classList.add("flex-container");

        const dueDateContainer = document.createElement("div");
        dueDateContainer.classList.add("add-to-do-due-date-container");

        const dueDateLabel = document.createElement('div');
        dueDateLabel.classList.add("add-to-do-due-date-label");
        dueDateLabel.textContent = "Due Date";
        dueDateContainer.appendChild(dueDateLabel);
        const dueDate = document.createElement("input");
        dueDate.placeholder = "yyyy/mm/dd";
        dueDate.classList.add("add-to-do-due-date");
        dueDateContainer.appendChild(dueDate);

        dueDatePriorityContainer.appendChild(dueDateContainer);

        const priorityContainer =  document.createElement("div");
        priorityContainer.classList.add("flex-container");
        priorityContainer.classList.add("add-to-do-priority-container");

        const priorityLabel = document.createElement("div");
        priorityLabel.classList.add("add-to-do-priority-label");
        priorityLabel.textContent = "Priority";
        priorityContainer.appendChild(priorityLabel);

        const noPriority = document.createElement("input");
        noPriority.type = "radio";
        noPriority.value = "none";
        noPriority.id = "no-priority";
        noPriority.checked = true;
        noPriority.name = "priority";
        priorityContainer.appendChild(noPriority);

        const noPriorityLabel = document.createElement("label");
        noPriorityLabel.for = "no-priority";
        noPriorityLabel.textContent = "None";
        priorityContainer.appendChild(noPriorityLabel);

        const lowPriority = document.createElement("input");
        lowPriority.type = "radio";
        lowPriority.value = "high";
        lowPriority.id = "low-priority";
        lowPriority.name = "priority";
        priorityContainer.appendChild(lowPriority);

        const lowPriorityLabel = document.createElement("label");
        lowPriorityLabel.for = "low-priority";
        lowPriorityLabel.textContent = "Low";
        priorityContainer.appendChild(lowPriorityLabel);

        const mediumPriority = document.createElement("input");
        mediumPriority.type = "radio";
        mediumPriority.value = "medium";
        mediumPriority.id = "mediumPriority";
        mediumPriority.name = "priority";
        priorityContainer.appendChild(mediumPriority);

        const mediumPriorityLabel = document.createElement("label");
        mediumPriorityLabel.for = "medium-priority";
        mediumPriorityLabel.textContent = "Medium";
        priorityContainer.appendChild(mediumPriorityLabel);

        const highPriority = document.createElement("input");
        highPriority.type = "radio";
        highPriority.value = "high";
        highPriority.id = "high-priority";
        highPriority.name = "priority";
        priorityContainer.appendChild(highPriority);

        const highPriorityLabel = document.createElement("label");
        highPriorityLabel.for = "high-priority";
        highPriorityLabel.textContent = "High";
        priorityContainer.appendChild(highPriorityLabel);

        dueDatePriorityContainer.appendChild(priorityContainer);
        toDoItemContainer.appendChild(dueDatePriorityContainer);
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("create-to-do-button-container");
        buttonContainer.classList.add("flex-container");
        const createButton = document.createElement("button");
        createButton.classList.add("to-do-create-button");
        createButton.textContent = "Create ToDo";
        const cancelButton = document.createElement("button");
        cancelButton.classList.add("to-do-cancel-button");
        cancelButton.textContent = "cancel";
        buttonContainer.appendChild(createButton);
        buttonContainer.appendChild(cancelButton);
        toDoItemContainer.appendChild(buttonContainer);
    
        toDoContainer.appendChild(toDoItemContainer);

        function cancelToDo() {
            toDoContainer.removeChild(toDoItemContainer);
            newToDoItemButton.disabled = false;
        }
        cancelButton.addEventListener("click", cancelToDo);
        // when pressing Create ToDo
        function saveToDo(event) {
            newToDoItemButton.disabled = false;
            const titleValue = title.value;
            const descriptionValue = description.value;
            const dueDateValue = dueDate.value;
            const radioPriority = document.getElementsByName('priority');
            let priorityValue;
            for (let i = 0; i < radioPriority.length; i = i + 1) {
                if (radioPriority[i].checked) {
                    priorityValue = radioPriority[i].value;
                }
            }
            const toDo = createToDoItem(titleValue, descriptionValue, dueDateValue, priorityValue);

            const activeToDoList = library.getActiveToDoList();
            activeToDoList.addToDo(toDo);
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);

            renderTodos();
        }
        createButton.addEventListener("click", saveToDo);
        title.focus();
        title.select();
    }
    newToDoItemButton.addEventListener("click", addToDoItem);
    renderTodos();
}

function saveNewToDoList(name) {
    const toDoList = createToDoList([], name);
    library.addToDoList(toDoList);
    const createNewToDoListWindow = document.getElementById("create-new-to-do-list-window");
    const body = document.querySelector("body");
    body.removeChild(createNewToDoListWindow);

    library.setActiveToDoList(toDoList);
    renderTodos();

    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = false;
    const newToDoListButton = document.getElementById("new-list-button");
    newToDoListButton.disabled = false;
 
}

function cancelNewToDoList() {
    const createNewToDoListWindow = document.getElementById("create-new-to-do-list-window");
    const body = document.querySelector("body");
    body.removeChild(createNewToDoListWindow);
}

function createNewToDoList() {
    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = true;
    const newToDoListButton = document.getElementById("new-list-button");
    newToDoListButton.disabled = true;

    const createNewToDoListWindow = document.createElement("div");
    createNewToDoListWindow.id = "create-new-to-do-list-window";

    const body = document.querySelector("body");
    body.appendChild(createNewToDoListWindow);

    const newToDoListName = document.createElement("input");
    newToDoListName.id = "new-to-do-list-name";
    newToDoListName.placeholder = "Name";
    createNewToDoListWindow.appendChild(newToDoListName);

    const saveToDoListButton = document.createElement("button");
    saveToDoListButton.id = "save-to-do-list-button";
    saveToDoListButton.textContent = "Save ToDo List";
    createNewToDoListWindow.appendChild(saveToDoListButton);

    const cancelToDoListButton = document.createElement("button");
    cancelToDoListButton.id = "cancel-to-do-list-button";
    cancelToDoListButton.textContent = "Cancel";
    createNewToDoListWindow.appendChild(cancelToDoListButton);

    saveToDoListButton.addEventListener("click", () => { saveNewToDoList(newToDoListName.value) });
    cancelToDoListButton.addEventListener("click", cancelNewToDoList);

    newToDoListName.focus();
    newToDoListName.select();
    
}

function chooseList(toDoList) {
    clearToDoContainer();
    library.setActiveToDoList(toDoList);
    renderTodos();

    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = false;
    
}

const seeYourLists = () => {

    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = true;
    
    const toDoContainer = clearToDoContainer();

    for (let toDoList of library.toDoListArray) {
        const toDoListButton = document.createElement("button");
        toDoListButton.textContent = toDoList.name;
        toDoListButton.classList.add("toDoListButton");
        toDoListButton.addEventListener("click", () => { chooseList(toDoList) });

        toDoContainer.appendChild(toDoListButton);
    }
}

const renderTodos = () => {
    const addOneToDo = (toDo) => {
        const toDoItemContainer = document.createElement("div");
        toDoItemContainer.classList.add("to-do-item-container");
        toDoItemContainer.classList.add("flex-container");
        toDoItemContainer.id = toDo.id;
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkbox");
        toDoItemContainer.appendChild(checkBox);

        const title = document.createElement("div");
        title.textContent = toDo.title;
        title.classList.add("title");
        toDoItemContainer.appendChild(title);

        const deleteAndEditButtonContainer = document.createElement("div");
        deleteAndEditButtonContainer.classList.add("delete-and-edit-button-container");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteAndEditButtonContainer.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.textContent = "Edit";
        deleteAndEditButtonContainer.appendChild(editButton);

        toDoItemContainer.appendChild(deleteAndEditButtonContainer);

        const toDoContainer = document.getElementById("to-do-container");
        toDoContainer.appendChild(toDoItemContainer);

        function removeToDo(event) {
            const toDoContainer = event.target.parentNode.parentNode.parentNode;
            const toDo = event.target.parentNode.parentNode;

            toDoContainer.removeChild(toDo);

            const activeToDoList = library.getActiveToDoList();
            for (let td of activeToDoList.toDoArray) {
                if (td.id == toDo.id) {
                    activeToDoList.deleteToDo(td);
                    break;
                }
            }
            

        }

        deleteButton.addEventListener("click", removeToDo);

        function editToDo(event) {
            const toDo = event.target.parentNode.parentNode;

        }
    }

    clearToDoContainer();

    const currentList = library.getActiveToDoList();
    const currentListName = document.getElementById("current-list-name");
    currentListName.textContent = currentList.name;

    for (let toDo of currentList.toDoArray) {
        addOneToDo(toDo);
    }

}
function clearToDoContainer() {
    const toDoContainer = document.getElementById("to-do-container");
    toDoContainer.textContent = '';
    return toDoContainer
}


export {startHomeScreen};