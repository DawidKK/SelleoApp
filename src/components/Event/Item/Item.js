import React from 'react';

import Item from './ItemStyles';

const EventItem = ({ event }) => {
  const { title, description } = event;
  return (
    <li>
      <Item>
        <p className="event-item__title">{title}</p>
        <p className="event-item__description">{description}</p>
      </Item>
    </li>
  );
};

export default EventItem;
