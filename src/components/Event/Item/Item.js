import React from 'react';

import EventItemStyle from './ItemStyles';

const EventItem = ({ event }) => {
  const { title, description } = event;

  return (
    <li>
      <EventItemStyle>
        <p className="event-item__title">{title}</p>
        <p className="event-item__description">{description}</p>
      </EventItemStyle>
    </li>
  );
};

export default EventItem;
