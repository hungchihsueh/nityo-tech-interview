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


// answer: The current implementation has several issues related to prop drilling, where the same props (name and age) are passed down through multiple levels of components. This can lead to code that is harder to maintain and understand, especially as the component hierarchy grows.

// solution: To improve the code, we can use React's Context API to manage and provide the name and age values to all components that need them, without having to pass them down through each level of the component tree. Here’s how we can modify the code:

import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);

  return (
    <UserContext.Provider value={{ name, age }}>
      <div>
        <ChildComponent />
        <GrandchildComponent />
      </div>
    </UserContext.Provider>
  );
}

function ChildComponent() {
  const { name, age } = useContext(UserContext);
  
  return (
    <div>
      <p>Name: {name}</p>
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {
  const { name, age } = useContext(UserContext);
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

