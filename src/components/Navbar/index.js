import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import { Link } from 'react-router-dom';

import NavStyles from '../Header/Nav/NavStyles';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <NavStyles>
          {/* <li className="nav-styles__item">
            <Link to="/">Events List</Link>
          </li> */}
          <li className="nav-styles__item">
            <Link to="/">Home</Link>&nbsp;
          </li>
          <li className="nav-styles__item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="nav-styles__item">
            <Link to="/form">Add Event</Link>
          </li>
          <li className="nav-styles__item">
            <Link to="/evaluation">Evaluation</Link>
          </li>
          <li className="nav-styles__item">
            <Link to="/user">User Board</Link>
          </li>
        </NavStyles>
      )}
    </div>
  );
};

export default NavBar;
