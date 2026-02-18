#!/usr/bin/env node

import {
  addTask,
  deleteTask,
  getTasks,
  getTasksByStatus,
  markDone,
  markInProgress,
  updateTask,
} from "./taskService";
import { TaskStatus } from "./types";
const [, , command, ...args] = process.argv;
try {
  switch (command) {
    case "add":
      const description = args.join("");
      const task = addTask(description);
      console.log(`Task added (Id: ${task.id})`);
      break;
    case "update":
      const id = Number(args[0]);
      const newDescription = args.slice(1).join(" ");
      const update = updateTask(newDescription, id);
      console.log(`Task updated (Id): ${update.id}`);
      break;
    case "delete":
      const taskId = Number(args);
      const deleted = deleteTask(taskId);
      console.log(`Task delete (Id):${deleted}}`);
      break;
    case "mark-in-progress":
      const markInProgressId = Number(args[0]);
      const inProgress = markInProgress(markInProgressId);
      console.log(`Task status updated to in-progress [id]: ${inProgress.id}`);
      break;
    case "mark-done":
      const markDoneId = Number(args[0]);
      const done = markDone(markDoneId);
      console.log(`Task status updated to in-progress [id]: ${done.id}`);
      break;
    case "list": {
      const status = args[0] as TaskStatus | undefined;

      const tasks = status ? getTasksByStatus(status) : getTasks();

      if (tasks.length === 0) {
        console.log("No tasks found");
        break;
      }
      console.table(
        tasks.map((task) => ({
          ID: task.id,
          Description: task.description,
          Status: task.status,
          CreatedAt: task.createdAt,
          UpdatedAt: task.updatedAt,
        })),
      );

      break;
    }
    default:
      console.log("Command not found");
  }
} catch (error: any) {
  console.error("Error :", error.message);
}
