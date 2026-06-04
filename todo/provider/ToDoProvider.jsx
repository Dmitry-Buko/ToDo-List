import { useState, useMemo, useEffect } from "react";
import { ToDoContext } from "./ToDoContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/tasksActions";

export const ToDoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const taskValue = useSelector((store) => store.tasks.taskValue);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        const parseTask = JSON.parse(savedTasks);
        dispatch(fetchTasks(parseTask));
      } catch (error) {
        console.error("Ошибка: ", error);
      }
    } else {
      console.log("В LS нет задач");
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskValue));
  }, [taskValue]);

  const activeCount = useMemo(() => {
    let count = 0;
    taskValue?.forEach((el) => {
      if (!el.isDone) count++;
    });
    return count;
  }, [taskValue]);

  const value = useMemo(
    () => ({
      activeCount,
      filter,
      setFilter,
    }),
    [activeCount, filter, setFilter],
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
