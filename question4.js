// question4.js

let tasks = [];
let idCounter = 1;

// Create a new task
function createTask(name, description) {
    const task = { id: idCounter++, name, description };
    tasks.push(task);
    return task;
}

// Get all tasks
function getAllTasks() {
    return tasks;
}

// Update a task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        return task;
    }
    return null;
}

// Delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1);
    }
    return null;
}

// Example usage:
createTask("Task 1", "Description of Task 1");
createTask("Task 2", "Description of Task 2");
console.log(getAllTasks());

updateTask(1, "Updated Task 1", "Updated Description");
console.log(getAllTasks());

deleteTask(2);
console.log(getAllTasks());
