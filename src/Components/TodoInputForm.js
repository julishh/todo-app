import React, { useState } from "react";
import './TodoInputForm.css'
const TodoInputForm = ({ todo, setTodo, addTask }) => {


  const [text, setText] = useState("");


  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text!==''){
    addTask(text);
    setText('');}

}


  return (
    <form className="input-form" onSubmit={handleSubmit}>
    <div>
      <input
      className="input"
        type="text"
        placeholder="Add New Task"
        value={text}
        onChange={handleChange}
      />
      <input className='task-button button' type="submit" value='Add'/>
    </div>
    </form>
  );
};

export default TodoInputForm;
