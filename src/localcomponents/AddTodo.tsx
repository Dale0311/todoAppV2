import { TTodo } from '@/api/api';
import { TodoDispatchContext } from '@/context';
import { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { uid } from 'uid';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const canAddTodo = Boolean(title);

  const dispatch = useContext(TodoDispatchContext);

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
          dispatch?.({
            type: 'add',
            todo: { title, isDone: false, id: uid() },
          });
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
