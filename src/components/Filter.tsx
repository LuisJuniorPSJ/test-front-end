import React, { Dispatch, SetStateAction } from "react";

type FilterProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4 min-w-[40%] bg-opacity-40">
      <h2 className="text-lg font-semibold mb-2">Filtrar:</h2>
      <div className="flex items-center">
        <p className="mr-2">Status:</p>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="All">Todos</option>
          <option value="Completed">Completos</option>
          <option value="Incomplete">Incompletos</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
