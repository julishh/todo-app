import TodoItem from "./TodoItem";
import './TodoList.css'
import Card from "./UI-elements/Card";
const TodoList = ({ list, remove ,finish}) => {
  return (
    <div className="todo-list">
     {list.length>0 ? list.map((task)=><TodoItem  key={task.id} todo={task} remove={remove} finish={finish} />):<Card> NO Task Added</Card>}
    </div>
  );
};

export default TodoList;
