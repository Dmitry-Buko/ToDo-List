import { useState, useMemo, useEffect } from "react";
import { ToDoContext } from "./ToDoContext";
import { useDispatch, useSelector } from "react-redux";
import {
  // addTitle,
  // clearCompetedTask,
  // deleteTitle,
  // editTitle,
  fetchTasks,
  // filterTasks,
  // togglerTask,
} from "../redux/actions/tasksActions";

export const ToDoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const taskValue = useSelector((store) => store.tasks.taskValue);

  // console.log("taskValue: ", taskValue);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    // console.log('savedTasks:', JSON.parse(savedTasks));
    if (savedTasks) {
      try {
        const parseTask = JSON.parse(savedTasks);
        // console.log("parseTask: ", parseTask);
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

  // const filteredTasks = useCallback(() => {
  //   dispatch(filterTasks(filter));
  // }, [dispatch, filter]);

  const value = useMemo(
    () => ({
      // filteredTasks,
      activeCount,
      filter,
      setFilter,
    }),
    [
      // filteredTasks,
      activeCount,
      filter,
      setFilter,
    ],
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
