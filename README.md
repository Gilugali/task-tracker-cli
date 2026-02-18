Task Tracker CLI

A lightweight command-line application for managing your daily tasks directly from the terminal.

This tool allows you to create, update, delete, and track tasks with different statuses all stored locally in a JSON file.

# Project Page

Repository URL:

https://github.com/your-username/task-cli

# Features

- Add new tasks

- Update existing tasks

- Delete tasks

- Mark tasks as in-progress or done

- List all tasks

- Filter tasks by status

# Installation

1. Clone the Repository
   `git clone <repository-url>`
   ` cd task-cli`

2. Install Dependencies
   `npm install`

3. Build the Project

Compile TypeScript into JavaScript:

`npm run build`

4. Link the CLI Globally

Make the task-cli command available system-wide:

`sudo npm run link`

You can now run task-cli from anywhere in your terminal.

# Usage

Basic format:

task-cli <command> [arguments]

Commands
`Add a Task`

- command task-cli add "Task description"

Example:

    - task-cli add "Finish backend project"

`Update a Task`

- command: task-cli update <id> "Updated description"

Example:

    - task-cli update 1 "Finish backend project and test features"

`Delete a Task`

- command: task-cli delete <id>

Example:

- task-cli delete 2

`Mark Task as In Progress`

- command: task-cli mark-in-progress <id>

`Mark Task as Done`

- commdand: task-cli mark-done <id>

`List All Tasks`

- command: task-cli list

`Filter Tasks by Status`

- command: task-cli list todo
- command: task-cli list in-progress
- command: task-cli list done

# Data Storage

All tasks are stored locally in a tasks.json file in the project directory.

Each task contains:
{
id – Unique identifier

description – Task description

status – todo, in-progress, or done

createdAt – Timestamp when the task was created

updatedAt – Timestamp when the task was last updated
}
🛠 Built With

Node.js

TypeScript

Native File System module

No external libraries were used.

📌 Notes

Task IDs are generated automatically.

All changes are saved instantly.

Invalid commands or IDs return clear error messages.
