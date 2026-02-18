import { ITask } from "./types";
import { TaskStatus } from "./types/index";
export declare const addTask: (description: string) => ITask;
export declare const updateTask: (description: string, id: number) => ITask;
export declare const deleteTask: (id: number) => number;
export declare const markInProgress: (id: number) => ITask;
export declare const markDone: (id: number) => ITask;
export declare const getTasks: () => ITask[];
export declare const getTasksByStatus: (status: TaskStatus) => ITask[];
//# sourceMappingURL=taskService.d.ts.map