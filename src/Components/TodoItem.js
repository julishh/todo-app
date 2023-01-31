import "./TodoItem.css";
import Card from "./UI-elements/Card";
const TodoItem = ({ todo, remove, finish }) => {
  return (
    <Card >
    
      <div className={`${todo.complete ? "completed" : ""}`}>
        {todo.task}
      </div>
      <div className="buttons">
      <button className="button" onClick={() => finish(todo.id)}>{todo.complete?'Completed':"Complete"}</button>

        <button className="button delete" onClick={() => remove(todo.id)}>Delete</button>

      </div>
    
    </Card>
  );
};

export default TodoItem;
