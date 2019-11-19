import React, { Component } from 'react'

export class UserBoard extends Component {
  state = {
    name: ''
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(({name}) => this.setState({name}))
  }

  render() {
    const { today } = this.props
    return (
      <div>
        <h2>Today is {today}</h2>
        {this.state.name}
      </div>
    )
  }
}

export default UserBoard
