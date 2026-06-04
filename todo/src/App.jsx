import Header from "./Header";
import InputTask from "./InputTask";
import ToDoList from "./ToDoList";
import FilteredTasks from "./FilteredTasks";
import withLogger from "../hoc/withLogger";

const InputTaskWithLog = withLogger(InputTask)
const FilteredTasksWithLog = withLogger(FilteredTasks)

function App() {
  return (
    <div className="todo">
      <Header />
      <InputTaskWithLog/>
      <ToDoList />
      <FilteredTasksWithLog />
    </div>
  );
}

export default App;
