import AddTodo from './AddTodo';
import Todos from './Todos';

const TodoWrapper = () => {
  return (
    <div className="w-[640px] h-[640px] bg-white rounded p-4">
      <div className="border flex justify-center py-4">
        <h1 className="text-3xl font-semibold">Todos</h1>
      </div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default TodoWrapper;
