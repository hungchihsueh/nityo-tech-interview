/** Read about the code below, please describe the issues and how you will be going to
const [todos, setTodos] = useState([
{ id: 1, text: '學習 React', completed: false, studyPoint: 3 },
{ id: 2, text: '建立專案', completed: false, studyPoint: 1 }
]);
const { id, text, studyPoint } = todos;
const [basePoints, setbasePoints] = useState(3);
const [sumPoints, setSumPoints] = useState(0);
const toggleTodo = (id) => {
const todo = todos.find(t => t.id === id);
todo.completed = !todo.completed;
setTodos(todos);
};
const handleStudyPointsChange = (e) => {
basePoints(e.target.value);
setSumPoints(parseInt(value1) + parseInt(e.target.value));
};
return (
<div>
<p>課程名稱: {text}</p>
<label>學習點數: </label>
<input type="number" value={studyPoint} onChange={handleStudyPointsChange} />
<p>總累積點數: {sumPoints}</p>
<button onClick={toggleTodo(id)}>篩選課程</button>
</div>
);
}
/** Code block end */


// answer: There are several issues with the provided code:
// 1. Direct State Mutation: The line `todo.completed = !todo.completed;` directly mutates the state, which is against React's principles. State should be treated as immutable.
// 2. Incorrect State Update: The `setTodos(todos);` call does not create a new array, so React may not detect the change and re-render the component.
// 3. Incorrect useState Setter: The line `basePoints(e.target.value);` should be `setbasePoints(e.target.value);` to correctly update the state.
// 4. Undefined Variable: The variable `value1` is used in `setSumPoints(parseInt(value1) + parseInt(e.target.value));` but it is not defined anywhere in the code.
// 5. Event Handler Binding: The button's onClick handler should be a function reference, but `toggleTodo(id)` is being called immediately during render.

// solution:
// 1. Create a new array when updating the todos state to avoid direct mutation.
// 2. Use the correct state setter function for updating basePoints.
// 3. Define or replace `value1` with the appropriate variable to calculate sumPoints.
// 4. Pass a function to the onClick handler to ensure it is called only when the button is clicked.

import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
    { id: 2, text: '建立專案', completed: false, studyPoint: 1 }
  ]);
  const [basePoints, setbasePoints] = useState(3);
  const [sumPoints, setSumPoints] = useState(0);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };

  const handleStudyPointsChange = (e) => {
    const newBasePoints = e.target.value;
    setbasePoints(newBasePoints);
    setSumPoints(parseInt(newBasePoints) + todos.reduce((acc, todo) => acc + (todo.completed ? todo.studyPoint : 0), 0));
  };

  return (
    <div>
      {todos.map(({ id, text, studyPoint }) => (
        <div key={id}>
          <p>課程名稱: {text}</p>
          <label>學習點數: </label>
          <input type="number" value={studyPoint} onChange={handleStudyPointsChange} />
          <button onClick={() => toggleTodo(id)}>篩選課程</button>
        </div>
      ))}
      <p>總累積點數: {sumPoints}</p>
    </div>
  );
}


