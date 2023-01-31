import { useState } from "react";
import "./App.css";

import TodoInputForm from "./Components/TodoInputForm";
import TodoList from "./Components/TodoList";

const TODOS = [
  {
    id: 1,
    task: "Make a Todo app",
    complete: true,
  },
  {
    id: 2,
    task: "Push the app to git",
    complete: false,
  },
 
];

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [todo, setTodo] = useState();

  const addTask = (text) => {
    
    let newTodos = [
      { id: new Date().valueOf(), task: text, complete: false },
      ...todos,
    ];
    setTodos(newTodos);
  };

  const removeTask = (id) => {
    
    let newTodos=todos.filter((t)=>t.id !== id)
    setTodos(newTodos)
  };

  const toogleHandler=(id)=>{
    
    let updatedTodos=todos.map(task=>{return task.id===id ? {...task,complete: !task.complete}:{...task}})
    setTodos(updatedTodos)
  }

  const removeAllTask=()=>{
    setTodos([])
  }
  return (
    <div className="App">
      <header>
        <h1>TODOS</h1>
      </header>
      <TodoInputForm todo={todo} setTodo={setTodo} addTask={addTask} />
     <div className="clear"> <button className=" button delete" onClick={removeAllTask} >Clear all</button></div>
      <TodoList list={todos} remove={removeTask} finish={toogleHandler} />
    </div>
  );
}

export default App;
