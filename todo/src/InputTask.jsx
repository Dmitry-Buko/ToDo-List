import { useCallback } from "react";
import { useTodo } from "../provider/ToDoContext";
import { useSelector, useDispatch } from "react-redux";
import { inputText, inputError, inputZero, inputDeleteError } from "../redux/actions/inputTextActions";

const InputTask = () => {
  const { addTask } = useTodo();
  // const [text, setText] = useState("");
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {inputValue, errorSpace} = useSelector((store) => store.text);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValue.trim()) {
        dispatch(inputError());
        return
      }
      addTask(inputValue);
      dispatch(inputZero());
    },
    [addTask, dispatch, inputValue],
  );

  const handleChange = (text) => {
    dispatch(inputText(text));
    dispatch(inputDeleteError());
  };

  return (
    <div className="todo__add-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className={`todo__input-task ${errorSpace ? "error" : ""}`}
          placeholder="Новая задача..."
        />
        <button className="add-task-form__submit" type="submit">
          Добавить ➕
        </button>
      </form>
      {errorSpace && (
        <div className="error-box">
          <span className="error-icon">⚠️</span>
          <span className="error-text">{errorSpace}</span>
        </div>
      )}
    </div>
  );
};

export default InputTask;
