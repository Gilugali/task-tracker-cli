import fs from "fs";
import path from "path";
import { ITask } from "./types";

const filePath = path.join(process.cwd(), "task.json");

export const readTask = (): ITask[] => {
  // console.log("hello");
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
    return [];
  }

  const data = fs.readFileSync(filePath, "utf-8");
  if (!data) return [];
  return JSON.parse(data);
};

export const writeTasks = (tasks: ITask[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};
