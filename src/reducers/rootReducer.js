import { ADD_EVENT } from '../actions/actionTypes';
import { SEARCH } from '../actions/actionTypes';

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
    },
    {
      id: '4',
      title: 'Event4',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '5',
      title: 'Event5',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '6',
      title: 'Event6',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '7',
      title: 'Event7',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '8',
      title: 'Event8',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '9',
      title: 'Event9',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '10',
      title: 'Event10',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '11',
      title: 'Event11',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '12',
      title: 'Event12',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '13',
      title: 'Event13',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '14',
      title: 'Event14',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '15',
      title: 'Event15',
      description: 'Lorem ipsum lorem ipsum'
    },
    {
      id: '16',
      title: 'Event16',
      description: 'Lorem ipsum lorem ipsum'
    }
  ]
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
    case SEARCH:
      const { term } = action;

      let events = state.events.filter(val => val.title.includes(term));
      console.log(events);

      return {
        ...state,
        events: [...events]
      };
    default:
      return state;
  }
};

function getSearch(state, term) {
  return state.events.filter(val => val.title.includes(term));
}

export default rootReducer;
