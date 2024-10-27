import { TTodo } from './api/api';

export type action =
  | {
      type: 'add';
      todo: TTodo;
    }
  | {
      type: 'edit';
      id: string;
      title: string;
    }
  | {
      type: 'delete';
      id: string;
    }
  | {
      type: 'completed';
      id: string;
    }
  | {
      type: 'moveup';
      index: number;
    }
  | {
      type: 'movedown';
      index: number;
    };

export const todosReducer = (todos: TTodo[], action: action) => {
  switch (action.type) {
    case 'add': {
      return [action.todo, ...todos];
    }
    case 'delete': {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case 'edit': {
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, title: action.title } : todo
      );
    }
    case 'completed': {
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    }

    // can be merge together

    case 'moveup': {
      const newTask = [...todos];
      const nextTodoIndex = action.index - 1;
      const temp = newTask[action.index];
      newTask[action.index] = newTask[nextTodoIndex];
      newTask[nextTodoIndex] = temp;
      return newTask;
    }
    case 'movedown': {
      const newTask = [...todos];
      const nextTodoIndex = action.index + 1;
      const temp = newTask[action.index];
      newTask[action.index] = newTask[nextTodoIndex];
      newTask[nextTodoIndex] = temp;
      return newTask;
    }

    default: {
      throw Error('Unknown given action');
    }
  }
};
