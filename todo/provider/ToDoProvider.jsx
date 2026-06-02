import { useState, useCallback, useMemo, useEffect } from "react";
import { ToDoContext } from "./ToDoContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addTitle,
  clearCompetedTask,
  deleteTitle,
  editTitle,
  fetchTasks,
  filterTasks,
  togglerTask,
} from "../redux/actions/tasksActions";

export const ToDoProvider = ({ children }) => {
  // const [tasks, setTasks] = useState(() => {
  //   try {
  //     const saved = localStorage.getItem("tasks");
  //     return saved ? JSON.parse(saved) : [];
  //   } catch (e) {
  //     console.error("Ошибка загрузки задач:", e);
  //     return [];
  //   }
  // }); //------------изменить!!!!
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const taskValue = useSelector((store) => store.tasks.taskValue);

  console.log('taskValue: ', taskValue);
  

  useEffect(()=>{
    const savedTasks = localStorage.getItem("tasks");
    console.log('savedTasks:', JSON.parse(savedTasks));
    dispatch(fetchTasks(JSON.parse(savedTasks)))
  },[])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskValue));
  }, [taskValue]); //

  //кол-во активных
  const activeCount = useMemo(() => {
    let count = 0;
    taskValue?.forEach((el) => {
      if (!el.isDone) count++;
    });
    return count;
  }, [taskValue]);

  const filteredTasks = useCallback(() => {
    dispatch(filterTasks(filter));
  }, [dispatch, filter]);

  const addTask = useCallback(
    (title) => {
      dispatch(addTitle(title));
    },
    [dispatch],
  );

  const editTask = useCallback(
    (id, newTitle) => {
      dispatch(editTitle(id, newTitle));
    },
    [dispatch],
  );

  const deleteTask = useCallback(
    (id) => {
      dispatch(deleteTitle(id));
    },
    [dispatch],
  );

  const isDoneToggler = useCallback(
    (id) => {
      dispatch(togglerTask(id));
    },
    [dispatch],
  );

  const clearCompeted = useCallback(() => {
    dispatch(clearCompetedTask());
  }, [dispatch]);

  const value = useMemo(
    () => ({
      // tasks,
      addTask,
      deleteTask,
      isDoneToggler,
      editTask,
      filteredTasks,
      activeCount,
      clearCompeted,
    }),
    [
      // tasks,
      addTask,
      deleteTask,
      isDoneToggler,
      editTask,
      filteredTasks,
      activeCount,
      clearCompeted,
    ],
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
