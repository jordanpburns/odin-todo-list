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
    // yourListsButton.addEventListener("click", seeYourLists)
    sidebar.appendChild(yourListsButton);

    const listsContainer = document.createElement("div");
    listsContainer.id = "lists-container";
    listsContainer.classList.add("flex-container");
    sidebar.appendChild(listsContainer);

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

    const plusButton = document.createElement("button");
    plusButton.id = "plus-button";
    plusButton.classList.add("btn-grad");
    plusButton.textContent = "+";
    toDoAndNameContainer.appendChild(plusButton);

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
        const plusButton = document.getElementById("plus-button");
        plusButton.disabled = true;
        const newToDoListButton = document.getElementById("new-list-button");
        newToDoListButton.disabled = true;
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

        const noPriorityDiv = document.createElement("div");
        noPriorityDiv.classList.add("flex-container");
        noPriorityDiv.classList.add("radio-item-container");

        const noPriority = document.createElement("input");
        noPriority.type = "radio";
        noPriority.value = "none";
        noPriority.id = "no-priority";
        noPriority.checked = true;
        noPriority.name = "priority";
        noPriorityDiv.appendChild(noPriority);

        const noPriorityLabel = document.createElement("label");
        noPriorityLabel.for = "no-priority";
        noPriorityLabel.textContent = "None";
        noPriorityDiv.appendChild(noPriorityLabel);

        priorityContainer.appendChild(noPriorityDiv);

        const lowPriorityDiv = document.createElement("div");
        lowPriorityDiv.classList.add("flex-container");

        const lowPriority = document.createElement("input");
        lowPriority.type = "radio";
        lowPriority.value = "low";
        lowPriority.id = "low-priority";
        lowPriority.name = "priority";
        lowPriorityDiv.appendChild(lowPriority);

        const lowPriorityLabel = document.createElement("label");
        lowPriorityLabel.for = "low-priority";
        lowPriorityLabel.textContent = "Low";
        lowPriorityDiv.appendChild(lowPriorityLabel);

        priorityContainer.appendChild(lowPriorityDiv);

        const mediumPriorityDiv = document.createElement("div");
        mediumPriorityDiv.classList.add("flex-container");

        const mediumPriority = document.createElement("input");
        mediumPriority.type = "radio";
        mediumPriority.value = "medium";
        mediumPriority.id = "mediumPriority";
        mediumPriority.name = "priority";
        mediumPriorityDiv.appendChild(mediumPriority);

        const mediumPriorityLabel = document.createElement("label");
        mediumPriorityLabel.for = "medium-priority";
        mediumPriorityLabel.textContent = "Medium";
        mediumPriorityDiv.appendChild(mediumPriorityLabel);

        priorityContainer.appendChild(mediumPriorityDiv);

        const highPriorityDiv = document.createElement("div");
        highPriorityDiv.classList.add("flex-container");

        const highPriority = document.createElement("input");
        highPriority.type = "radio";
        highPriority.value = "high";
        highPriority.id = "high-priority";
        highPriority.name = "priority";
        highPriorityDiv.appendChild(highPriority);

        const highPriorityLabel = document.createElement("label");
        highPriorityLabel.for = "high-priority";
        highPriorityLabel.textContent = "High";
        highPriorityDiv.appendChild(highPriorityLabel);

        priorityContainer.appendChild(highPriorityDiv);

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
            plusButton.disabled = false;
            const newToDoListButton = document.getElementById("new-list-button");
            newToDoListButton.disabled = false;
        }
        cancelButton.addEventListener("click", cancelToDo);
        // when pressing Create ToDo
        function saveToDo(event) {
            newToDoItemButton.disabled = false;
            plusButton.disabled = false;
            const newToDoListButton = document.getElementById("new-list-button");
            newToDoListButton.disabled = false;
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
            renderLists();
        }
        createButton.addEventListener("click", saveToDo);
        title.focus();
        title.select();
    }
    newToDoItemButton.addEventListener("click", addToDoItem);
    plusButton.addEventListener("click", addToDoItem);
    renderTodos();
    renderLists();
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
    const plusButton = document.getElementById("plus-button");
    plusButton.disabled = false;

    renderLists();
}

function cancelNewToDoList() {
    const createNewToDoListWindow = document.getElementById("create-new-to-do-list-window");
    const body = document.querySelector("body");
    body.removeChild(createNewToDoListWindow);
    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = false;
    const newToDoListButton = document.getElementById("new-list-button");
    newToDoListButton.disabled = false;
    const plusButton = document.getElementById("plus-button");
    plusButton.disabled = false;
}

function createNewToDoList() {
    const newToDoItemButton = document.getElementById("new-to-do-item-button");
    newToDoItemButton.disabled = true;
    const newToDoListButton = document.getElementById("new-list-button");
    newToDoListButton.disabled = true;
    const plusButton = document.getElementById("plus-button");
    plusButton.disabled = true;

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
    const plusButton = document.getElementById("plus-button");
    plusButton.disabled = false;
    const newToDoListButton = document.getElementById("new-list-button");
    newToDoListButton.disabled = false;
}

const renderLists = () => {
    const listsContainer = document.getElementById("lists-container");
    listsContainer.textContent = "";

    for (let toDoList of library.toDoListArray) {
        const toDoListButton = document.createElement("button");
        toDoListButton.classList.add("flex-container");
        const listName = document.createElement("div");
        listName.textContent = toDoList.name;
        const numTodos = document.createElement("div");
        numTodos.classList.add("num-todos");
        numTodos.textContent = toDoList.toDoArray.length;

        toDoListButton.appendChild(listName);
        toDoListButton.appendChild(numTodos);

        toDoListButton.classList.add("to-do-list-button");
        toDoListButton.addEventListener("click", () => { chooseList(toDoList) });
        listsContainer.appendChild(toDoListButton);
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

        switch(toDo.priority) {
            case "none":
                break
            case "low":
                toDoItemContainer.classList.add("low-priority");
                break;
            case "medium":
                toDoItemContainer.classList.add("medium-priority");
                break;
            case "high":
                toDoItemContainer.classList.add("high-priority");
                break;
            default:
                break;
        }

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
            renderLists();
        }

        deleteButton.addEventListener("click", removeToDo);
        // TODO
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