import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { TaskList } from "./components/TaskList";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="p-4">
        <h1>Task Management App</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
