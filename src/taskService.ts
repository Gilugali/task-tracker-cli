import { readTask, writeTasks } from "./storage";
import { ITask, IUpdateTask } from "./types";
import { TaskStatus } from "./types/index";

export const addTask = (description: string): ITask => {
  if (!description) {
    throw new Error("No description provided");
  }

  const tasks = readTask();
  const lastTask = tasks[tasks.length - 1];
  const newId = lastTask ? lastTask.id + 1 : 1;

  const newTask: ITask = {
    id: newId,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  writeTasks(tasks);
  return newTask;
};

export const updateTask = (description: string, id: number): ITask => {
  if (!id) {
    throw new Error("No id provided");
  }
  if (!description) {
    throw new Error("No description to update");
  }

  const tasks = readTask();

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, description, updatedAt: new Date().toISOString() }
      : task,
  );

  writeTasks(updatedTasks);
  return updatedTasks.find((task) => task.id === id)!;
};

export const deleteTask = (id: number) => {
  if (!id) {
    throw new Error("No id provided");
  }

  const tasks: ITask[] = readTask();

  const filteredTasks = tasks.filter((task) => task.id !== id);

  writeTasks(filteredTasks);
  return id;
};

export const markInProgress = (id: number): ITask => {
  if (!id) {
    throw new Error("No id provided");
  }

  const tasks = readTask();
  const taskExist = tasks.find((task) => task.id === id);
  if (!taskExist) {
    throw new Error("Id does not exist");
  }
  if (taskExist.status === "in-progress") {
    return taskExist;
  }

  const updatedTask: ITask = {
    ...taskExist,
    status: "in-progress",
    updatedAt: new Date().toISOString(),
  };
  const updatedTasks = tasks.map((task) =>
    task.id === id ? updatedTask : task,
  );
  writeTasks(updatedTasks);
  return updatedTask;
};

export const markDone = (id: number): ITask => {
  if (!id) {
    throw new Error("No id provided");
  }

  const tasks = readTask();

  const taskExist = tasks.find((task) => task.id === id);
  if (!taskExist) {
    throw new Error("Id does not exist");
  }

  if (taskExist.status === "done") {
    return taskExist;
  }
  const taskUpdated: ITask = {
    ...taskExist,
    status: "done" as TaskStatus,
    updatedAt: new Date().toISOString(),
  };
  const updatedTasks = tasks.map((task) =>
    task.id === id ? taskUpdated : task,
  );
  writeTasks(updatedTasks);
  return taskUpdated;
};

export const getTasks = (): ITask[] => {
  const tasks = readTask();
  return tasks;
};

export const getTasksByStatus = (status: TaskStatus): ITask[] => {
  if (!status) {
    throw new Error("Status not found");
  }
  const tasks = readTask();
  const filteredTasks = tasks.filter((task) => task.status === status);
  return filteredTasks;
};
