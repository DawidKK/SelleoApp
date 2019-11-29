import React, { Component } from 'react'

class EventItem extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="EventItem" data-testid="EventItem">
        <div data-testid="EventItem-text" className="EventItem-text">
          {event.text}
        </div>
      </div>
    );
  }
}

export default EventItem
