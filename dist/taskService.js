"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByStatus = exports.getTasks = exports.markDone = exports.markInProgress = exports.deleteTask = exports.updateTask = exports.addTask = void 0;
const storage_1 = require("./storage");
const addTask = (description) => {
    if (!description) {
        throw new Error("No description provided");
    }
    const tasks = (0, storage_1.readTask)();
    const lastTask = tasks[tasks.length - 1];
    const newId = lastTask ? lastTask.id + 1 : 1;
    const newTask = {
        id: newId,
        description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    (0, storage_1.writeTasks)(tasks);
    return newTask;
};
exports.addTask = addTask;
const updateTask = (description, id) => {
    if (!id) {
        throw new Error("No id provided");
    }
    if (!description) {
        throw new Error("No description to update");
    }
    const tasks = (0, storage_1.readTask)();
    const updatedTasks = tasks.map((task) => task.id === id
        ? { ...task, description, updatedAt: new Date().toISOString() }
        : task);
    (0, storage_1.writeTasks)(updatedTasks);
    return updatedTasks.find((task) => task.id === id);
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    if (!id) {
        throw new Error("No id provided");
    }
    const tasks = (0, storage_1.readTask)();
    const filteredTasks = tasks.filter((task) => task.id !== id);
    (0, storage_1.writeTasks)(filteredTasks);
    return id;
};
exports.deleteTask = deleteTask;
const markInProgress = (id) => {
    if (!id) {
        throw new Error("No id provided");
    }
    const tasks = (0, storage_1.readTask)();
    const taskExist = tasks.find((task) => task.id === id);
    if (!taskExist) {
        throw new Error("Id does not exist");
    }
    if (taskExist.status === "in-progress") {
        return taskExist;
    }
    const updatedTask = {
        ...taskExist,
        status: "in-progress",
        updatedAt: new Date().toISOString(),
    };
    const updatedTasks = tasks.map((task) => task.id === id ? updatedTask : task);
    (0, storage_1.writeTasks)(updatedTasks);
    return updatedTask;
};
exports.markInProgress = markInProgress;
const markDone = (id) => {
    if (!id) {
        throw new Error("No id provided");
    }
    const tasks = (0, storage_1.readTask)();
    const taskExist = tasks.find((task) => task.id === id);
    if (!taskExist) {
        throw new Error("Id does not exist");
    }
    if (taskExist.status === "done") {
        return taskExist;
    }
    const taskUpdated = {
        ...taskExist,
        status: "done",
        updatedAt: new Date().toISOString(),
    };
    const updatedTasks = tasks.map((task) => task.id === id ? taskUpdated : task);
    (0, storage_1.writeTasks)(updatedTasks);
    return taskUpdated;
};
exports.markDone = markDone;
const getTasks = () => {
    const tasks = (0, storage_1.readTask)();
    return tasks;
};
exports.getTasks = getTasks;
const getTasksByStatus = (status) => {
    if (!status) {
        throw new Error("Status not found");
    }
    const tasks = (0, storage_1.readTask)();
    const filteredTasks = tasks.filter((task) => task.status === status);
    return filteredTasks;
};
exports.getTasksByStatus = getTasksByStatus;
//# sourceMappingURL=taskService.js.map