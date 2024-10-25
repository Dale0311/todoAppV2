import { TTodo } from '@/api/api';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { uid } from 'uid';
type TAddTodoProp = {
  handleAddTodo: (todo: TTodo) => void;
};
const AddTodo = ({ handleAddTodo }: TAddTodoProp) => {
  const [title, setTitle] = useState('');
  const canAddTodo = Boolean(title);

  return (
    <div className="py-4 flex items-center mx-auto">
      <input
        type="text"
        className="outline-none border-b px-4 py-2 flex-1"
        placeholder="New todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        disabled={!canAddTodo}
        className={`py-2 px-4 disabled:bg-indigo-300 disabled:cursor-not-allowed disabled:hover:bg-none bg-indigo-500 hover:bg-indigo-600 text-white flex items-center space-x-2`}
        onClick={() => {
          handleAddTodo({ title, isDone: false, id: uid() });
          return setTitle('');
        }}
      >
        <FaPlus />
        <p>Add todo</p>
      </button>
    </div>
  );
};

export default AddTodo;
