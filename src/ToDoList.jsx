import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddToDo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <>
      <div>
        <h1>Simple Shopping Cart</h1>
        <p>Add a Product</p>
        <input
          type="text"
          placeholder="Enter Product"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <input type="number" placeholder="Price" />
        <button onClick={handleAddToDo}>Add</button>

        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </div>

      {/* <div>
                  <h5>product in cart</h5>
                        <ul>
                    {
                           todos.map(todo =>(
                            <li>{todo}</li>
                         ))
                    }
                      
                   
                   
                  </ul>
                  
                  <p>$</p>
            </div> */}
    </>
  );
}

export default ToDoList;
