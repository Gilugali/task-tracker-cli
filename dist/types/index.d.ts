export type TaskStatus = "todo" | "in-progress" | "done";
export interface ITask {
    id: number;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}
export interface IUpdateTask {
    id: number;
    description: string;
    updatedAt: string;
}
//# sourceMappingURL=index.d.ts.map