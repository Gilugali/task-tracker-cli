"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTasks = exports.readTask = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(process.cwd(), "task.json");
const readTask = () => {
    // console.log("hello");
    if (!fs_1.default.existsSync(filePath)) {
        fs_1.default.writeFileSync(filePath, JSON.stringify([]));
        return [];
    }
    const data = fs_1.default.readFileSync(filePath, "utf-8");
    if (!data)
        return [];
    return JSON.parse(data);
};
exports.readTask = readTask;
const writeTasks = (tasks) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};
exports.writeTasks = writeTasks;
//# sourceMappingURL=storage.js.map