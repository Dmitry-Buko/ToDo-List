const initialValue = {
  taskValue: [],
  filteredTask: [],
  error: "",
};

const inputTextReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "errorMessage": //выбросить только ошибку
      return {
        ...state,
        error: action.payload,
      };
    case "errorToZero":
      return {
        ...state,
        error: "",
      };
      case 'fetchTasks'://загрузка тасок с LS
        return {
          ...state,
          taskValue: action.payload
        }
    case "addTitle":
      return {
        ...state,
        taskValue: [...state.taskValue, action.payload],
      };
    case "editTitle":
      return {
        ...state,
        taskValue: state.taskValue.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.newTitle }
            : task,
        ),
      };
    case "deleteTitle":
      return {
        ...state,
        taskValue: state.taskValue.filter(
          (task) => task.id !== action.payload.id,
        ),
      };
    case "togglerTask":
      return {
        ...state,
        taskValue: state.taskValue.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task,
        ),
      };
      case 'clearCompetedTask':
        return{
          ...state,
          taskValue: state.taskValue.filter((task) => !task.isDone)
        }
        case 'filterTasks':
          return{
            ...state,
            filteredTask: []
            // switch (filter) {
            //       case "active":
            //         return tasks.filter((item) => !item.isDone);
            //       case "completed":
            //         return tasks.filter((item) => item.isDone);
            //       default:
            //         return tasks;
            //     }
          }
    default:
      return state;
  }
};

export default inputTextReducer;
