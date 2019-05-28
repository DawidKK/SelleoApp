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
  if (action.type === 'ADD_EVENT') {
    const { id, title, description } = action;
    let newEvent = {
      id,
      title,
      description
    };

    return {
      ...state,
      events: [...state.events, newEvent]
    };
  }
  return state;
};

export default rootReducer;
