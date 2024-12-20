function createToDoItem (title, description, dueDate, priority) {
    const id = create_id();
    let completed = false;

    return { id, title, description, dueDate, priority, completed };
}

function createToDoList (toDoArray = [], name = "My ToDo List") {
    const id = create_id();

    const addToDo = (toDoItem) => {
        toDoArray.push(toDoItem);
    }

    const deleteToDo = (toDoItem) => {
        const index = toDoArray.indexOf(toDoItem);
        if (index > -1) {
            toDoArray.splice(index, 1);
        }
    }
    // TODO don't directly expose toDoArray
    return {id, addToDo, deleteToDo, toDoArray, name};
}

const ToDoListLibrary = (toDoListArray = []) => {
    let activeToDoList = toDoListArray[0];

    const setActiveToDoList = (toDoList) => {
        activeToDoList = toDoList;
    }
    const getActiveToDoList = () => activeToDoList;

    const addToDoList = (toDoList) => {
        toDoListArray.push(toDoList);
    }

    const deleteToDoList = (toDoList) => {
        const index = toDoListArray.indexOf(toDoList);
        if (index > -1) {
            toDoListArray.splice(index, 1);
        }
    }
    return { toDoListArray, addToDoList, deleteToDoList, setActiveToDoList, getActiveToDoList };
}

function create_id() { 
    return "id" + Math.random().toString(16).slice(2);
}

export { createToDoItem, createToDoList, ToDoListLibrary};

