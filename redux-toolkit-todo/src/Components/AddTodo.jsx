import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todoSlice";
import PrimaryButton from "./shared/buttons/primaryButton";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
 
      e.preventDefault();
      if (input !== " ") {
      dispatch(addTodo(input));
      setInput(" ");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-5 items-center mt-10">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 ml-30 text-base outline-none text-gray-100 py-2 px-6 leading-7 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button> */}
      <PrimaryButton buttonTitle={"Add Todo"} bgColor="bg-indigo-500" />
    </form>
  );
};

export default AddTodo;
