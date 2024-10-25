import { TTodo } from '@/api/api';
import Todo from './Todo';

type TTodosProps = {
  todos: TTodo[];
  handleToggleIsDone: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTitle: (id: string, title: string) => void;
  handleMoveUp: (index: number) => void;
  handleMoveDown: (index: number) => void;
};

const Todos = ({
  todos,
  handleToggleIsDone,
  handleDeleteTodo,
  handleUpdateTitle,
  handleMoveUp,
  handleMoveDown,
}: TTodosProps) => {
  // render list of todo
  const todoList = todos.map((todo, i) => (
    <Todo
      key={todo.id}
      index={i}
      {...todo}
      todoLength={todos.length - 1}
      handleToggleIsDone={handleToggleIsDone}
      handleDeleteTodo={handleDeleteTodo}
      handleUpdateTitle={handleUpdateTitle}
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
    />
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

{
  // const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = e.target;
  // // if value is equals to current sort
  //   if (value === sort) return;
  // // if value(updated sort) has value then use it to my setSort hook else just return empty string
  //   setSort(value ? value : '');
  // };
  /* <div className="flex justify-end items-center space-x-2">
  <label htmlFor="sort">Sort:</label>
  <select
    name="sort"
    id="sort"
    className="py-2 px-4"
    value={sort}
    onChange={(e) => handleChangeSort(e)}
  >
    <option>Default</option>
    <option value="new">Newest First</option>
    <option value="asc">Ascending</option>
    <option value="dsc">Descending</option>
  </select>
</div>; */
}
