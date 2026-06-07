import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {change, inputError, detele_error, zero} from "../redux/slice/inputSlice";
import { addTitle } from "../redux/slice/taskSlice";

const InputTask = (props) => {
  const dispatch = useDispatch();
  const { inputValue, errorSpace } = useSelector((store) => store.text);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValue.trim()) {
        dispatch(inputError());
        return;
      }
      dispatch(addTitle(inputValue));
      props.logActions("addTitle");
      dispatch(zero());
    },
    [dispatch, inputValue, props],
  );

  const handleChange = (text) => {
    dispatch(change(text));
    dispatch(detele_error());
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
