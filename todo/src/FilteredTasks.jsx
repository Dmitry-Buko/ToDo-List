import { useDispatch, useSelector } from "react-redux";
import { useTodo } from "../provider/ToDoContext";
import { clearCompetedTask, filterTasks } from "../redux/slice/taskSlice";

const FilteredTasks = (props) => {
  const { activeCount } = useTodo();
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.tasks);

  return (
    <div className="todo__footer">
      <div className="filters">
        <button
          className={`filters__btn ${filter === "all" ? "filters__btn--active" : ""}`}
          onClick={() => dispatch(filterTasks("all"))}
        >
          Все
        </button>
        <button
          className={`filters__btn ${filter === "active" ? "filters__btn--active" : ""}`}
          onClick={() => dispatch(filterTasks("active"))}
        >
          Активные
        </button>
        <button
          className={`filters__btn ${filter === "completed" ? "filters__btn--active" : ""}`}
          onClick={() => dispatch(filterTasks("completed"))}
        >
          Завершенные
        </button>
      </div>
      <div className="footer">
        <p className="todo__counter">Осталось дел: {activeCount}</p>
        <button
          className="todo__clear-completed"
          onClick={() => {
            dispatch(clearCompetedTask());
            props.logActions("clearCompetedTask");
          }}
        >
          Очистить выполненные
        </button>
      </div>
    </div>
  );
};

export default FilteredTasks;
