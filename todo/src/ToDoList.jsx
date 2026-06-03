import Task from "./Task";
import useFiltrationTasks from "../redux/hooks/useFiltrationTasks";

const ToDoList = () => {
  const filteredTasks = useFiltrationTasks()

  return (
    <div className="tasks-list">
      {filteredTasks.length === 0 && <h1>Пусто 🤷🏼‍♂️</h1>}
      {filteredTasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </div>
  );
};

export default ToDoList;
