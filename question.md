`/* All following exams please using Javascript only 20241220 */`

## 1.

```js
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/
function sortUserName(user) {
  user.sort((a, b) => {
    const nameA = (a.firstName + a.lastName + a.customerID).toLowerCase();
    const nameB = (b.firstName + b.lastName + b.customerID).toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return user;
}
/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
function sortByType(user) {
  const professionOrder = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  user.sort((a, b) => {
    return professionOrder[b.profession] - professionOrder[a.profession];
  });
  return user;
}
```

## 2.

```html
/** HTML
<div class="container">
<div class="header">5/8 外出確認表</div>
<div class="content">
<ol class="shop-list">
<li class="item">麵包</li>
<li class="item">短袖衣服</li>
<li class="item">飲用水</li>
<li class="item">帳篷</li>
</ol>
<ul class="shop-list">
<li class="item">暈車藥</li>
<li class="item">感冒藥</li>
<li class="item">丹木斯</li>
<li class="item">咳嗽糖漿</li>
</ul>
</div>
<div class="footer">以上僅共參考</div>
</div>
**/
```

```css
/** CSS
.container {
font-size: 14px;
}
}
.container .header {
font-size: 18px;
.container .shop-list {
list-style: none;
margin-left: -15px;
}
.container .shop-list li.item {
color: green;
}
.container .shop-list .item {
Q1. /* Explain why does this color not works, and how to fix make it work on 1st list */
color: blue;
}

answer: 原因是因為“.container .shop-list li.item”的選擇器優先權較高，導致藍色樣式無法套用到<li>元素上。要把藍色樣式套用到第一個列表，可以使用更高優先權的選擇器，例如：
.container .shop-list:first-of-type .item {
    color: blue;
}
Q2. /* Write styling make every other line give background color to next one */
.container .shop-list:nth-of-type(odd) {
    background-color: lightpink;
}
**/
```

## 3.

```js
/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
function getUniqueNumber (items) {
  // if we want to console log the whole array of unique items
  const uniqueItems = [...new Set(items)];
  console.log(uniqueItems);

  // if we want to console log each unique item one by one
  const uniqueSet = new Set();
  items.forEach(item => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      console.log(item);
    }
  });
}
```

## 4.

```text
/** What is virtual DOM and what purpose does it aim to solve?? **/
```
Virtual DOM is a programming concept used in libraries like React to optimize updates to the actual DOM (Document Object Model). It is a lightweight copy of the real DOM that allows for efficient rendering and updating of UI components. When a change occurs in the application state, instead of directly manipulating the real DOM (which can be slow and inefficient), the changes are first applied to the virtual DOM. The virtual DOM then compares the new version with the previous version using a process called "diffing." This process identifies the minimal set of changes needed to update the real DOM. Finally, only those changes are applied to the real DOM, resulting in improved performance and a smoother user experience. The main purpose of the virtual DOM is to reduce the performance overhead associated with direct DOM manipulation, leading to faster rendering and more responsive applications.
``
## 5.

```text
/** Can you explain about the type of never and what is the differ with void? **/
```
In TypeScript, `never` and `void` are two distinct types that serve different purposes. `void` is typically used to indicate that a function does not return a value, while `never` is used to indicate that a function will never complete successfully (e.g., it always throws an error or enters an infinite loop). This means that `never` is a subtype of all types, including `void`, but `void` is not a subtype of `never`. Understanding the difference between these two types is important for effectively using TypeScript's type system.
## 6.

```text
/** What is difference between framework base website and normal website (none
framework) **/
```

## 7.

```jsx
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
```

## 8.

```js
improve it **/
/** Code block start */
const TodoList = () => {
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
```

## 9.

```jsx
/** Read about the code below, suggest how to improve the code **/
/** Code block start */
function ParentComponent() {
const [name, setName] = useState("Naro");
const [age, setAge] = useState(12);
return (
<div>
<ChildComponent name={name} age={age} />
<GrandchildComponent name={name} age={age} />
</div>
);
}
function ChildComponent({ name, age }) {
return (
<div>
<p>Name: {name}</p>
<GrandchildComponent name={name} age={age} />
</div>
);
}
function GrandchildComponent({ name, age }) {
return (
<div>
<p>Name: {name}</p>
<p>Age: {age}</p>
</div>
);
}
/** Code block end */
```

## 10.

```jsx
/** Read about the code below, achieving that make input element in “SearchInput” to be
focused while search button on click **/
/** Code block start */
function SearchButton() {
return (
<button> Search </button>
);
}
function SearchInput() {
return (
<input/>
);
}
export default function Page() {
return (
<>
<nav>
<SearchButton />
</nav>
<SearchInput />
</>
);
}
/** Code block end */
```

Developer Code Quality Test
Please fork the code base below and return it as answer, we
will read through the code after we got the answer.
URL: https://codesandbox.io/p/devbox/pre-test-
task-management-3rz3sd
