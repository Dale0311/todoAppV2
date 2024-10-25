import { MdDeleteOutline } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';
import { TTodo } from '@/api/api';
import { useState } from 'react';

import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

type TTodoProps = TTodo & {
  index: number;
  todoLength: number;
  handleToggleIsDone: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTitle: (id: string, title: string) => void;
  handleMoveUp: (index: number) => void;
  handleMoveDown: (index: number) => void;
};

const Todo = ({
  index,
  id,
  isDone,
  title,
  todoLength,
  handleToggleIsDone,
  handleDeleteTodo,
  handleUpdateTitle,
  handleMoveUp,
  handleMoveDown,
}: TTodoProps) => {
  const [canEditTitle, setCanEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const toggleEditTitle = () => {
    setCanEditTitle((prev) => !prev);
  };

  const handleClickUpdate = () => {
    // so if newtitle is the same then dont manipulate state data
    if (newTitle !== title) {
      handleUpdateTitle(id, newTitle);
      toggleEditTitle();
    }
  };

  const canSaveTitle = Boolean(newTitle);

  return (
    <li className="flex">
      <div className="flex items-center p-2 space-x-4 text-xl text-gray-500">
        <button
          className="hover:text-gray-600 cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
          onClick={() => handleMoveUp(index)}
          disabled={index === 0}
        >
          <FaArrowUp />
        </button>
        <button
          className="hover:text-gray-600 cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
          onClick={() => handleMoveDown(index)}
          disabled={index === todoLength}
        >
          <FaArrowDown />
        </button>
      </div>
      <div className="border py-2 px-4 flex items-center text-xl justify-between hover:shadow-md text-gray-700 flex-1">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={id}
            id={id}
            checked={isDone}
            onChange={() => handleToggleIsDone(id)}
            className="text-5xl"
          />
          {canEditTitle ? (
            // editable title
            <input
              type="text"
              value={newTitle}
              className="border-b p-1 w-full outline-none"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          ) : (
            // display title
            <label
              htmlFor={id}
              className={`cursor-pointer ${
                isDone && 'line-through'
              } p-1 border-b border-transparent`}
            >
              {newTitle}
            </label>
          )}
        </div>
        {canEditTitle ? (
          // controls when editing title
          <div className="flex items-center space-x-2 ">
            <button
              className="px-4 py-1 border rounded "
              onClick={() => {
                toggleEditTitle();
                return setNewTitle(title);
              }}
            >
              cancel
            </button>
            <button
              disabled={!canSaveTitle}
              className="px-4 py-1 border rounded text-white bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
              onClick={handleClickUpdate}
            >
              save
            </button>
          </div>
        ) : (
          // controls when not editing title
          <div className="flex items-center space-x-2">
            <MdDeleteOutline
              className="text-red-500 text-2xl cursor-pointer"
              onClick={() => handleDeleteTodo(id)}
            />
            <BiSolidEdit
              className="text-blue-500 text-2xl cursor-pointer"
              onClick={toggleEditTitle}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default Todo;
