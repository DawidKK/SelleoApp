import { ADD_EVENT } from './actionTypes';

export const addEvent = data => {
  const { title, description } = data;

  return {
    type: ADD_EVENT,
    id: Math.random(),
    title,
    description
  };
};
