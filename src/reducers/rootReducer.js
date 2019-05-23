const initState = {
  events: [
    {
      id: '1',
      title: 'Event1',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '2',
      title: 'Event2',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '3',
      title: 'Event3',
      description: 'Lorem ipsum lorem ipsum'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
