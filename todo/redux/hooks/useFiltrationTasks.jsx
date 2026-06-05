import { useMemo } from "react";
import { useSelector } from "react-redux";

const useFiltrationTasks = () => {
  const { taskValue = [], filter = "all" } = useSelector(
    (store) => store.tasks,
  );

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return taskValue.filter((task) => !task.isDone);
      case "completed":
        return taskValue.filter((task) => task.isDone);
      default:
        return taskValue;
    }
  }, [taskValue, filter]);

  return filteredTasks;
};

export default useFiltrationTasks;
