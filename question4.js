// question4.js
let tasks = []; // Store tasks in an array

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function getTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Where to input?
// Example usage:
addTask(1, "Buy groceries", "Get milk and eggs");
addTask(2, "Study JavaScript", "Read about closures");
console.log(getTasks()); // View tasks
updateTask(1, "Buy groceries", "Get milk, eggs, and bread");
deleteTask(2);
console.log(getTasks()); // View updated tasks
