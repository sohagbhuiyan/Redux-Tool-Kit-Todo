import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/todoSlice";
import PrimaryButton from "./shared/buttons/primaryButton";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-5 flex justify-between items-center bg-zinc-800 px-10 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            {/* <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button> */}
            <PrimaryButton buttonTitle={"Delete"} handleClick={() => dispatch(removeTodo(todo.id))} bgColor="bg-red-500"/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
