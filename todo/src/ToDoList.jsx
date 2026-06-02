import { useSelector } from "react-redux";
import Task from "./Task";

const ToDoList = () => {
  const {taskValue} = useSelector((store) => store.tasks);
  console.log(taskValue);
  

  return (
    <div className="tasks-list">
      {taskValue.length === 0 && <h1>Пусто 🤷🏼‍♂️</h1>}
      {taskValue.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </div>
  );
};

export default ToDoList;
