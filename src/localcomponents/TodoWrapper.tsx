import { useState } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';
import { todoApi, TTodo } from '@/api/api';

const TodoWrapper = () => {
  const [todos, setTodos] = useState(todoApi);
  const handleAddTodo = (todo: TTodo) => {
    setTodos((todos) => [todo, ...todos]);
  };

  const handleToggleIsDone = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTitle = (id: string, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const handleMoveUp = (index: number) => {
    // if index is the first item we cannot move it any further up
    if (index === 0) return;
    // copy the array
    const newTask = [...todos];
    const nextTodoIndex = index - 1;

    // copy the current todo
    const temp = newTask[index];

    // replace the current todo to the nextTodo
    newTask[index] = newTask[nextTodoIndex];
    // replace the nextTodo to the currentTodo
    newTask[nextTodoIndex] = temp;
    setTodos(newTask);
  };
  const handleMoveDown = (index: number) => {
    //if index is at the last of the array then return.
    if (todos.length - 1 === index) return; // because length method starts counting at 1
    // copy the array
    const newTask = [...todos];
    const nextTodoIndex = index + 1;

    // copy the current todo
    const temp = newTask[index];

    // replace the current todo to the nextTodo
    newTask[index] = newTask[nextTodoIndex];
    // replace the nextTodo to the currentTodo
    newTask[nextTodoIndex] = temp;
    setTodos(newTask);
  };
  return (
    <div className="w-[640px] h-[640px] bg-white rounded p-4">
      <div className="border flex justify-center py-4">
        <h1 className="text-3xl font-semibold">Todos</h1>
      </div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        handleToggleIsDone={handleToggleIsDone}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTitle={handleUpdateTitle}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
      />
    </div>
  );
};

export default TodoWrapper;
