/** Read the code below, please figure out why after “Switch Person” button clicked, the
tasks state doesn’t update correctly, and how to make it update as we expected **/
/** Code block start */
import { useState } from 'react';
export default function TaskManager() {
const [isPersonAlice, setIsPersonAlice] = useState(true);
return (
<div>
{isPersonAlice ? (
<TaskCounter name="Alice" />
) : (
<TaskCounter name="Bob" />
)}
<button onClick={() => {
setIsPersonAlice(!isPersonAlice);
}}>
Switch Person
</button>
</div>
);
}
function TaskCounter({ name }) {
const [tasks, setTasks] = useState(0);
return (
<>
<h1>{name}'s tasks: {tasks}</h1>
<button onClick={() => setTasks(tasks + 1)}>
Complete Task
</button>
</>
);
}
/** Code block end */


// answer: The issue with the current implementation is that the `tasks` state in the `TaskCounter` component is not preserved when switching between "Alice" and "Bob". Each time the `TaskCounter` component is re-rendered due to the change in `isPersonAlice`, a new instance of the component is created, and its state is reset to 0.

// solution: 
// we can lift the state up to the parent component `TaskManager` so that the task counts for both Alice and Bob are maintained independently. Here’s how we can modify the code:

import { useState, useEffect } from 'react';

export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  const [aliceTasks, setAliceTasks] = useState(0);
  const [bobTasks, setBobTasks] = useState(0);

  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter name="Alice" tasks={aliceTasks} setTasks={setAliceTasks} />
      ) : (
        <TaskCounter name="Bob" tasks={bobTasks} setTasks={setBobTasks} />
      )}
      <button onClick={() => {
        setIsPersonAlice(!isPersonAlice);
      }}>
        Switch Person
      </button>
    </div>
  );
}

function TaskCounter({ name, tasks, setTasks }) {
  return (
    <>
      <h1>{name}'s tasks: {tasks}</h1>
      <button onClick={() => setTasks(tasks + 1)}>
        Complete Task
      </button>
    </>
  );
} 