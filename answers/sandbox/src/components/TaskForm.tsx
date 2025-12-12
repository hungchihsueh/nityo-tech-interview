import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";

type NewTaskFormState = {
  title: string;
  description: string;
  status: Task["status"];
  priority: Task["priority"];
};

const createDefaultFormState = (): NewTaskFormState => ({
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
});

export const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [formState, setFormState] =
    useState<NewTaskFormState>(createDefaultFormState);

  const updateField = <
    K extends keyof NewTaskFormState,
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(
    key: K,
    event: React.ChangeEvent<T>
  ) => {
    const value = event.target.value as NewTaskFormState[K];
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = formState.description.trim();
    addTask({
      title: formState.title,
      description: description || undefined,
      status: formState.status,
      priority: formState.priority,
    });
    setFormState(createDefaultFormState());
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="task-title">標題</label>
        <input
          id="task-title"
          name="title"
          className="border border-black rounded px-2 py-1"
          value={formState.title}
          onChange={(event) => updateField("title", event)}
          placeholder="輸入任務標題"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="task-description">描述</label>
        <textarea
          id="task-description"
          name="description"
          className="border border-black rounded px-2 py-1"
          value={formState.description}
          onChange={(event) => updateField("description", event)}
          placeholder="任務描述（選填）"
          rows={3}
        />
      </div>

      <div className="flex gap-2">
        <label className="flex flex-col">
          狀態
          <select
            className="border border-black rounded px-2 py-1"
            value={formState.status}
            onChange={(event) => updateField("status", event)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label className="flex flex-col">
          優先級
          <select
            className="border border-black rounded px-2 py-1"
            value={formState.priority}
            onChange={(event) => updateField("priority", event)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="self-start border border-black rounded-md px-3 py-1"
      >
        新增 Task
      </button>
    </form>
  );
};
