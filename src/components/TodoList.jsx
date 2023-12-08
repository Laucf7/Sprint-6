import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useBudget } from "./BudgetContext";

function TodoList() {
  const { arrayServices, services, webConfig } = useBudget();

  const [todos, setTodos] = useState([]);

  const calcultotalServicePrice = () => {
    return arrayServices.reduce((total, service) => {
      if (services && services[service.title.toUpperCase()]) {
        total += service.price
      }
      return total;
    }, 0);
  }

  const calculaddWebPrice = () => {
    return services.WEB ? (webConfig.pages + webConfig.languages) * 30 : 0;
  };

  const addTodo = (todo) => {
    const checkedServices = arrayServices
      .filter((service) => services && services[service.title.toUpperCase()])
      .map((service) => service.title);

    const totalService = calcultotalServicePrice();
    const totalWeb = calculaddWebPrice();
    

    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      name: todo.name,
      phone: todo.phone,
      email: todo.email,
      services: checkedServices,
      webPages: webConfig.pages,
      webLanguages: webConfig.languages,
      totalPrice: totalService + totalWeb,
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  }
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
}
  return (
    <>
      <div className="mx-auto max-w-[50%] rounded overflow-hidden shadow-lg m-4 p-4 border-2 border-lime-50">
        <h1 className='text-lg font-bold ml-2'>Demanar pressupost:</h1>
        <TodoForm onSubmit={addTodo} />
      </div>
      <h2 className='mx-auto max-w-[50%] text-lg font-bold'>Pressupostos en curs:</h2>
      <div>
        <Todo
          todos={todos}
          removeTodo={removeTodo}
          arrayServices={arrayServices} />
      </div>
    </>
  );

}

export default TodoList;