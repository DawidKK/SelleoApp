import axios from 'axios'
export const source = axios.CancelToken.source();

export const fetchPostComments = () => {
  return (
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.data)
      .then(user => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${user.id}`))
  )
}

/** This fetchs users and todos */
export const fetchUsersAndTodos = () => {
  return (
    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/todos')
      ], {
        cancelToken: source.token
      })
      .then(axios.spread((users, todos) => ({
        users,
        todos
      })))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('canceled kierwa')
          console.log(thrown.message);
        } else {
          // handle error
        }
      })
  )
}

export default {
  fetchPostComments,
  fetchUsersAndTodos,
  source
}
