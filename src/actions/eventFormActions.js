export const addEvent = data => {
  const { title, description } = data;

  return {
    type: 'ADD_EVENT',
    id: Math.random(),
    title,
    description
  };
};
