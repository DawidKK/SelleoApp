import React from 'react';
import { Link } from 'react-router-dom';

import NavStyles from './NavStyles';

const HeaderNav = () => {
  return (
    <NavStyles>
      <li className="nav-styles__item">
        <Link to="/">Events List</Link>
      </li>
      <li className="nav-styles__item">
        <Link to="/form">Add Event</Link>
      </li>
    </NavStyles>
  );
};

export default HeaderNav;
