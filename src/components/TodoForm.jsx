import { useState } from "react";

function TodoForm({ onSubmit }) {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");


  const handleChange = (e, setInputFunction) => {
    setInputFunction(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000000),
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
    })
    setInputName("");
    setInputPhone("");
    setInputEmail("");
  };

  return (
    <div className="">

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={inputName}
          className="todo-input-name m-2 ps-2"
          onChange={(e) => handleChange(e, setInputName)} />

        <input 
        type='number' 
        placeholder='Phone' 
        value={inputPhone} 
        className='todo-input-phone m-2 ps-2' 
        onChange={(e) => handleChange(e, setInputPhone)} />

        <input 
        type='email' 
        placeholder='Email' 
        value={inputEmail} 
        className='todo-input-email m-2 ps-2' 
        onChange={(e) => handleChange(e, setInputEmail)} />

        <button className="todo-button ml-2 border-4 border-teal-800 rounded-lg m-3 p-2 bg-teal-800 font-semibold text-slate-100">Sol·licitar pressupost →</button>

      </form>
    </div >
  )
}
export default TodoForm;
