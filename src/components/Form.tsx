import React, { useState, FormEvent, ChangeEvent } from "react";

type FormProps = {
  addTodo: (text: string, description: string) => void;
};

const Form: React.FC<FormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, description);
    setValue("");
    setDescription("");
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="todo-form bg-gray-100 p-4 rounded-md shadow-md mb-4 bg-opacity-40">
      <h2 className="text-lg font-semibold mb-2">Criar tarefa:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          onChange={handleValueChange}
          type="text"
          value={value}
          placeholder="Digite o título"
          maxLength={30}
          required
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          onChange={handleDescriptionChange}
          type="text"
          value={description}
          maxLength={30}
          placeholder="Descrição (Opcional)"
          className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default Form;
