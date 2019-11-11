import { ADD_EVENT, ADD_COMMENTS, ADD_USERS_TODOS } from './actionsType';

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
  ],
  comments: [],
  todos: [],
  users: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_EVENT:
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

    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...action.payload]
      };
    case ADD_USERS_TODOS:
      return {
        ...state,
        todos: [...action.payload.todos.data],
        users: [...action.payload.users.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
