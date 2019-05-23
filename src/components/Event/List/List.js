import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventItem from '../Item/Item';

import EventListStyle from './ListStyles';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <EventListStyle>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </EventListStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(EventList);
