import { ADD_NUMBER, FETCH_TODO, LOADED_TODO } from '../constants';

// TODO: Fix the type in Future PR
export const add = (num: number): any => ({
  type: ADD_NUMBER,
  payload: num,
});

export const fetchTodos = () => ({
  type: FETCH_TODO,
});

export const loadedTodos = (todo: any) => ({
  type: LOADED_TODO,
  payload: todo,
});
