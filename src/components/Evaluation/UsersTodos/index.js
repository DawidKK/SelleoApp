import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import take from 'lodash/take'

import api from '../../../utils/api'
import ListItem from '../../../components/ListItem'
import UsersTodosStyles from './UsersTodosStyles'

import { fetchUsersAndTodos } from '../../../store/comments/actions'

export const UsersAndTodos = ({ fetchUsersAndTodos, users, todos }) => {
  useEffect(() => {
    fetchUsersAndTodos()
    return () => {
      api.source.cancel('Request canceled.')
    };
  }, [])

  useEffect(() => {
    console.log('Any props has changed')
  })

  const todosItems = take(todos, 10)
  return (
    <>
      <h2>Todos</h2>
      <UsersTodosStyles>
        {todosItems.map(todo => <ListItem key={todo.id}>{todo.title}</ListItem>)}
      </UsersTodosStyles>
      <h2>Users</h2>
      <UsersTodosStyles>
        {users.map(user => <ListItem key={user.id}>{user.name}</ListItem>)}
      </UsersTodosStyles>
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
