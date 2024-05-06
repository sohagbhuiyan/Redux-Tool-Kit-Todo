import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <h1 className="text-4xl items-center justify-items-center">Redux ToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
