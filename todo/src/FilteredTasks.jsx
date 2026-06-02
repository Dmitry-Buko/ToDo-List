import { useDispatch } from "react-redux";
import { useTodo } from "../provider/ToDoContext";
import { clearCompetedTask } from "../redux/actions/tasksActions";
import useFiltrationTasks from "../redux/hooks/useFiltrationTasks";

const FilteredTasks = () => {
  const { filter, setFilter, activeCount } = useTodo();
  const dispatch = useDispatch();
  useFiltrationTasks(filter);
  console.log("filter:", filter);

  return (
    <div className="todo__footer">
      <div className="filters">
        <button
          className={`filters__btn ${filter === "all" ? "filters__btn--active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`filters__btn ${filter === "active" ? "filters__btn--active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Активные
        </button>
        <button
          className={`filters__btn ${filter === "completed" ? "filters__btn--active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Завершенные
        </button>
      </div>
      <div className="footer">
        <p className="todo__counter">Осталось дел: {activeCount}</p>
        <button
          className="todo__clear-completed"
          onClick={() => dispatch(clearCompetedTask())}
        >
          Очистить выполненные
        </button>
      </div>
    </div>
  );
};

export default FilteredTasks;
