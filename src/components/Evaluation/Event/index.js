import React, { Component } from 'react'

import EventList from '../EventList'
import EventForm from '../EventForm'

class Event extends Component {
  state = {
    events: [
      { text: 'Manieczki lecimy lecimy' },
    ]
  };

  addEvent = event => {
    const events = this.state.events;
    setTimeout(() => {
      this.setState({ events: events.concat(event) });
    }, 0);
  };

  render() {
    return (
      <>
        <h2>Event</h2>
        <EventForm addEvent={this.addEvent} />
        <EventList events={this.state.events} deleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default Event
