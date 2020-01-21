import React, { Component } from 'react';
import Can from '../../Can';

import { roles } from '../../../rbac-roles';
export class UserBoard extends Component {
  state = {
    role: 'user'
  };

  handleChange = e => this.setState({ role: e.target.value})

  render() {
    const { role } = this.state;

    return (
      <div>
        <h1>Pretend this is Admin board, no kidding</h1>
        <h2>You can be anyone you ever dream!</h2>
        {roles.map(role => (
          <label for={role.role}>
            <input id={role.role} onChange={this.handleChange} type="radio" name="role.role" value={role.role} />
            Do you want be {role.role}?
          </label>
        ))}
        <h3>Who can get access to this page?</h3>
        <Can
          role={role}
          perform="admin-page:visit"
          yes={() => <p>Everyone can get access to this place</p>}
        />
        <h3>What can you do on this page?</h3>
        <Can
          role={role}
          perform="admin-page:edit"
          yes={() => (
            <>
              <p>Feel free to change something</p>
              <button onClick={() => alert('You are boss here')}>Check this out!</button>
            </>
          )}
          no={() => <p>Hold your horses, you are just poor user, don't touch anything</p>}
        />
      </div>
    );
  }
}

export default UserBoard;
