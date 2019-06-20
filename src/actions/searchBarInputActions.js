import { SEARCH } from './actionTypes';

export const searchEvent = data => {
  const { term } = data;

  return {
    type: SEARCH,
    term
  };
};
