export type TTodo = {
  title: string;
  isDone: boolean;
  id: string;
};

export const todoApi: TTodo[] = [
  {
    id: '1',
    title: 'Clean My Motorcycle',
    isDone: false,
  },
  {
    id: '2',
    title: 'Listen to Kungfu Kenny',
    isDone: false,
  },
  {
    id: '3',
    title: 'Practice Code',
    isDone: false,
  },
];
