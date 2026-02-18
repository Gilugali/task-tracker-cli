#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskService_1 = require("./taskService");
const [, , command, ...args] = process.argv;
try {
    switch (command) {
        case "add":
            const description = args.join("");
            const task = (0, taskService_1.addTask)(description);
            console.log(`Task added (Id: ${task.id})`);
            break;
        case "update":
            const id = Number(args[0]);
            const newDescription = args.slice(1).join(" ");
            const update = (0, taskService_1.updateTask)(newDescription, id);
            console.log(`Task updated (Id): ${update.id}`);
            break;
        case "delete":
            const taskId = Number(args);
            const deleted = (0, taskService_1.deleteTask)(taskId);
            console.log(`Task delete (Id):${deleted}}`);
            break;
        case "mark-in-progress":
            const markInProgressId = Number(args[0]);
            const inProgress = (0, taskService_1.markInProgress)(markInProgressId);
            console.log(`Task status updated to in-progress [id]: ${inProgress.id}`);
            break;
        case "mark-done":
            const markDoneId = Number(args[0]);
            const done = (0, taskService_1.markDone)(markDoneId);
            console.log(`Task status updated to in-progress [id]: ${done.id}`);
            break;
        case "list": {
            const status = args[0];
            const tasks = status ? (0, taskService_1.getTasksByStatus)(status) : (0, taskService_1.getTasks)();
            if (tasks.length === 0) {
                console.log("No tasks found");
                break;
            }
            console.table(tasks.map((task) => ({
                ID: task.id,
                Description: task.description,
                Status: task.status,
                CreatedAt: task.createdAt,
                UpdatedAt: task.updatedAt,
            })));
            break;
        }
        default:
            console.log("Command not found");
    }
}
catch (error) {
    console.error("Error :", error.message);
}
//# sourceMappingURL=index.js.map