import { createContext, Dispatch } from 'react';
import { TTodo } from './api/api';
import { action } from './reducer';

export const TodoContext = createContext<TTodo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<action> | null>(null);
