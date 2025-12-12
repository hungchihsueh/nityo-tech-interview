import React, { useState, useMemo } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";
import { TaskForm } from "./TaskForm";

type FilterState = Partial<Pick<Task, "status" | "priority">>;

const statusOptions: Task["status"][] = ["todo", "in-progress", "done"];
const priorityOptions: Task["priority"][] = ["low", "medium", "high"];
const statusCycle: Task["status"][] = ["todo", "in-progress", "done"];

export const TaskList: React.FC = () => {
  const { tasks, deleteTask, updateTask } = useTasks();
  const [filter, setFilter] = useState<FilterState>({});

  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        (!filter.status || task.status === filter.status) &&
        (!filter.priority || task.priority === filter.priority)
    );
  }, [tasks, filter]);

  const renderTaskActions = (task: Task) => {
    const handleDelete = () => {
      deleteTask(task.id);
    };

    const handleStatusChange = () => {
      const currentIndex = statusCycle.indexOf(task.status);
      const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];
      updateTask(task.id, { status: nextStatus });
    };

    return (
      <>
        <button
          className="border border-black rounded-md p-1"
          onClick={handleStatusChange}
        >
          Change Status
        </button>
        <button
          className="border border-black rounded-md p-1"
          onClick={handleDelete}
        >
          Delete
        </button>
      </>
    );
  };

  return (
    <div>
      {/* 操作欄位 */}
      <h1 className="text-xl font-bold my-3">Control Panel</h1>
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex gap-2">
          <label className="flex flex-col">
            狀態篩選
            <select
              value={filter.status || ""}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  status: (e.target.value as Task["status"]) || undefined,
                }))
              }
              className="border border-black rounded px-2 py-1"
            >
              <option value="">All Statuses</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            優先級篩選
            <select
              value={filter.priority || ""}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  priority: (e.target.value as Task["priority"]) || undefined,
                }))
              }
              className="border border-black rounded px-2 py-1"
            >
              <option value="">All Priorities</option>
              {priorityOptions.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex-1">
          <TaskForm />
        </div>
      </div>
      {/* task 列表 */}
      <h1 className="text-xl font-bold my-3">Task list</h1>
      <div className="flex flex-col">
        {filteredTasks.length === 0 ? (
          <p className="text-sm text-gray-600">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <div className="flex gap-2 items-center flex-wrap" key={task.id}>
              <h3 className="font-bold">{task.title}</h3>
              {task.description && <p>{task.description}</p>}
              <p>Status: {task.status}</p>
              <p>Priority: {task.priority}</p>
              {renderTaskActions(task)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
