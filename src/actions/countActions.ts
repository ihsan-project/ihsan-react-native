import { ADD_NUMBER, GET_TODO } from '../constants';

// TODO: Fix the type in Future PR
export const add = (num: number): any => ({
  type: ADD_NUMBER,
  payload: num,
});

export const fetchTodos = () => ({
  type: GET_TODO,
});
