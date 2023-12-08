import { RiCloseCircleLine } from 'react-icons/ri'

function Todo({ todos, removeTodo, arrayServices }) {
  return todos.map((todo) => (
    <div className="flex justify-between mx-auto max-w-[50%] rounded m-4 p-4 border-2 border-lime-50"
      key={todo.id}>
      <div className="w-25%">
        <h1 className="font-bold text-xl text-white">{todo.name}</h1>
        <p>{todo.phone}</p>
        <p>{todo.email}</p>
      </div>
      <div className="w-25%">
        <h2 className='font-bold text-lg'>Serveis:</h2>
        {todo.services.map((serviceName) => (
          <p key={serviceName}>
            {arrayServices.find((service) => service.title === serviceName).title}
          </p>
        ))}
        {todo.services.includes("WEB") && (
          <div>
            <p>
              ({todo.webPages} pàgines, {todo.webLanguages} llenguatges)
            </p>
          </div>
        )}
      </div>

      <div className="w-25%">
        <h2> Total:
          <p className='font-bold text-xl text-white'>
            {todo.totalPrice} €
          </p>
        </h2>
      </div>
      <div className="icons w-25%">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>

  ));
}

export default Todo;
