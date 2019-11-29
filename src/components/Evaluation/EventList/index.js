import React, { Component } from 'react'

import EventItem from '../EventItem'

class EventList extends Component {
  render() {
    const { events } = this.props;
    return events.map((event, i) => <EventItem key={i} event={event} />);
  }
}

export default EventList
