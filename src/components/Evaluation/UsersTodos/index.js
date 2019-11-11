import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import take from 'lodash/take'

import api from '../../../utils/api'

import { fetchUsersAndTodos } from '../../../store/comments/actions'

export const UsersAndTodos = ({ fetchUsersAndTodos, users, todos }) => {
  useEffect(() => {
    fetchUsersAndTodos()
    return () => {
      api.source.cancel('Request canceled.')
    };
  }, [])

  const todosItems = take(todos, 10)
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todosItems.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
  users: state.users
})

const mapDispatchToProps = {
  fetchUsersAndTodos,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAndTodos)
