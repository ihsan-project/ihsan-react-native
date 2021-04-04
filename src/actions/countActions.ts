import { ADD_NUMBER } from '../constants';

// TODO: Fix the type in Future PR
// eslint-disable-next-line import/prefer-default-export
export const add = (num: number): any => ({
  type: ADD_NUMBER,
  payload: num,
});
