import { useMemo } from "react";
import { useSelector } from "react-redux";

const useFiltrationTasks = (filter) => {
  
  const {taskValue, filteredTask} = useSelector((store) => store.tasks);
  
  const filtrationTask = useMemo(() => {
    switch (filter) {
      case "active":
        return taskValue.filter((item) => !item.isDone);
      case "completed":
        return taskValue.filter((item) => item.isDone);
      default:
        return taskValue;
    }
  },[filter, taskValue]);

  return filtrationTask
};
export default useFiltrationTasks;
