import { ADD_EVENT, ADD_COMMENTS, ADD_USERS_TODOS } from './actionsType';
import api from '../../utils/api'

export const addEvent = data => {
  const { title, description } = data;

  return {
    type: ADD_EVENT,
    id: Math.random(),
    title,
    description
  };
};

export const fetchPostComments = () => dispatch =>
  api.fetchPostComments().then(({data}) => dispatch(fetchPostCommentsAction(data)))


export const fetchPostCommentsAction = data => ({
  type: ADD_COMMENTS,
  payload: data,
})

export const fetchUsersAndTodos = () => dispatch => {
  console.log('api.fetchUsersAndTodos()', api)
  return (
    api.fetchUsersAndTodos().then((data) => dispatch(fetchUsersAndTodosAction(data)))
  )
}


export const fetchUsersAndTodosAction = data => ({
  type: ADD_USERS_TODOS,
  payload: data,
})
