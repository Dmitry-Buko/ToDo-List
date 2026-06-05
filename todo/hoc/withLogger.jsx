const withLogger = (WrappedComponent) => {
  return (props) => {
    const logActions = (actionType) => {
      const messages = {
        fetchTasks: "Задачи загружены",
        addTitle: "Добавлена задача",
        editTitle: "Задача изменена",
        deleteTitle: "Задача удалена",
        togglerTask: "Изменен статус задачи",
        clearCompetedTask: "Список выполненных задач очищен",
      };
      const message = messages[actionType] || "Что-то произошло...";
      const timeString = new Date().toLocaleTimeString("ru-RU");
      console.log(`${timeString}: ${message}`);
    };

    return <WrappedComponent {...props} logActions={logActions} />;
  };
};

export default withLogger;
