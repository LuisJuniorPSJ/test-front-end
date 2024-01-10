import React from "react";

type TodoType = {
  id: number;
  text: string;
  description: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: TodoType;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo bg-gray-100 p-4 rounded-md shadow-md flex flex-col sm:flex-row justify-between items-center mb-2"
      style={{ color: todo.isCompleted ? "green" : "inherit" }}
    >
      <div className="content w-full sm:w-auto flex-grow sm:flex-grow-0">
        <div className="max-w-xs sm:max-w-full overflow-hidden overflow-ellipsis">
          <p
            className={`text-lg sm:text-base ${
              todo.isCompleted ? "text-green-500" : ""
            }`}
          >
            {todo.text}
          </p>
        </div>

        {todo.description && (
          <p className="category text-sm italic lg:text-xs md:text-xs sm:text-xs">
            ({todo.description})
          </p>
        )}
      </div>
      <div className="buttons mt-2 sm:mt-0">
        <button
          onClick={() => completeTodo(todo.id)}
          className={`px-3 py-1 rounded-md bg-green-500 text-white mr-2 ${
            todo.isCompleted ? "opacity-50" : "hover:bg-green-600"
          }`}
        >
          Completar
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
