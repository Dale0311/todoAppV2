import Todo from './Todo';
import { useContext } from 'react';
import { TodoContext } from '@/context';

const Todos = () => {
  const todos = useContext(TodoContext);

  // render list of todo
  const todoList = todos.map((todo, i) => (
    <Todo key={todo.id} index={i} {...todo} todoLength={todos.length - 1} />
  ));

  // render if no existing todos
  if (!todoList.length) {
    return (
      <div className="flex justify-center text-2xl mx-auto">No todo...</div>
    );
  }

  return (
    <div>
      <ul className="space-y-2">{todoList}</ul>
    </div>
  );
};

export default Todos;
