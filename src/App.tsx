import { useReducer } from 'react';
import TodoWrapper from './localcomponents/TodoWrapper';
import { todosReducer } from './reducer';
import { todoApi } from './api/api';
import { TodoContext, TodoDispatchContext } from './context';

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, todoApi);
  return (
    <div className="flex items-center justify-center w-sreen h-screen bg-indigo-300">
      <TodoContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoWrapper />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
