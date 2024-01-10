import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Login from "./components/Login";

type TodoType = {
  id: number;
  text: string;
  description: string;
  isCompleted: boolean;
};

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn === "true";
  });

  const [todos, setTodos] = useState<TodoType[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [isLoggedIn, todos]);

  const [filter, setFilter] = useState<string>("All");

  const addTodo = (text: string, description: string): void => {
    const newTodos: TodoType[] = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        description,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id: number): void => {
    const newTodos: TodoType[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id: number): void => {
    const newTodos: TodoType[] = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-500 bg-gradient-to-br from-blue-400 to-indigo-600">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg min-w-[35%] min-h-80 bg-opacity-40">
          <h1 className="text-3xl font-semibold mb-4">Lista de Tarefas</h1>
          <Filter filter={filter} setFilter={setFilter} />
          <div className="max-h-48 overflow-y-auto">
            {todos
              .filter((todo) =>
                filter === "All"
                  ? true
                  : filter === "Completed"
                  ? todo.isCompleted
                  : !todo.isCompleted
              )
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              ))}
          </div>
          <Form addTodo={addTodo} />
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
