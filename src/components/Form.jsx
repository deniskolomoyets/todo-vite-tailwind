import { useState } from "react";
import { FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo(value);
    setValue("");
  };

  return (
    <form
      className=" flex items-center justify-center mb-2 font-primary w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg-transparent border border-amber-600 p-3 w-1/2  text-black  rounded placeholder:text-gray-500"
        placeholder="Enter Your Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="bg-amber-600 hover:bg-amber-400 border-none p-4 text-black cursor-pointer rounded ml-2">
        <FaPlus />
      </button>
    </form>
  );
};

export default Form;
