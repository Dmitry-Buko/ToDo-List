import { useCallback, useState } from "react";
import { useTodo } from "../provider/ToDoContext";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage, setErrorToZero } from "../redux/actions/tasksActions";

const Task = ({ task }) => {
  const { deleteTask, isDoneToggler, editTask } = useTodo();

  const { error } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const validateAndEditNewTask = useCallback(
    (text) => {
      if (!text.trim()) {
        dispatch(errorMessage());
      }
      editTask(task.id, text);
      setIsEdit(false);
    },
    [editTask, task.id, dispatch],
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateAndEditNewTask(editText);
    } else if (e.key === "Escape") {
      setIsEdit(false);
      setEditText(task.title);
      dispatch(setErrorToZero());
    }
  };

  const toggleEdit = () => {
    if (isEdit) {
      validateAndEditNewTask(editText);
    } else {
      setIsEdit(true);
      dispatch(setErrorToZero());
    }
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        className="task__checkbox"
        checked={task.isDone}
        onChange={() => isDoneToggler(task.id)}
      />

      <div className="task__content">
        {isEdit ? (
          <div className="edit-wrapper">
            <input
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value);
                if (error) dispatch(setErrorToZero());
              }}
              onKeyDown={handleKeyDown}
              className={`edit-wrapper__input ${error ? "error" : ""}`}
              autoFocus
            />
            {error && (
              <div className="error-box">
                <span className="error-icon">⚠️</span>
                <span className="error-text">{error}</span>
              </div>
            )}
          </div>
        ) : (
          <p className={`task__text ${task.isDone ? "done" : ""}`}>
            {task.title}
          </p>
        )}
      </div>

      <div className="task__actions">
        <button onClick={toggleEdit} className="task__btn--edit">
          {isEdit ? "Сохранить ✅" : "Изменить ✍️"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="task__btn--delete"
        >
          Удалить 🗑
        </button>
      </div>
    </div>
  );
};

export default Task;
