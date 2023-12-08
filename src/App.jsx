import CheckboxProvider from "./components/BudgetContext.jsx";
import Checkbox from "./components/Checkbox.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <CheckboxProvider>
      <Checkbox />
      <TodoList />
    </CheckboxProvider>
  );
}

export default App;