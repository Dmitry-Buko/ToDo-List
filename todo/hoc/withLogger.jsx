const withLogger = (WrappedComponent) => {
  return (props) => {
    const logActions = (actionType) => {
      let message = "";
      switch (actionType) {
        case "fetchTasks":
          message = "Задачи загружены";
          break;
        case "addTitle":
          message = "Добавлена задача";
          break;
        case "deleteTitle":
          message = "Задача удален";
          break;
        case "togglerTask":
          message = "Изменен статус задачи";
          break;
        case "clearCompetedTask":
          message = "Список выполненных задач очищен";
          break;
        default:
          message = "Что-то произошло...";
          break;
      }
      console.log(message);
      
    };

    <WrappedComponent {...props} logActions={logActions}/>;
  };
};

export default withLogger;
