import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventItem from '../Item/Item';

import EventListStyle from './ListStyles';
import EventPaginationStyle from './PaginationStyles';

class EventList extends Component {
  state = {
    currentPage: 1,
    eventsPerPage: 9
  };

  handleClick = e => {
    this.setState({
      currentPage: e.target.id
    });
  };

  render() {
    const { events } = this.props;
    const { currentPage, eventsPerPage } = this.state;

    const indexOfLastTodo = currentPage * eventsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderEvents = currentEvents.map(event => {
      return <EventItem key={event.id} event={event} />;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(events.length / eventsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="events-pagination__item"
          key={number}
          id={number}
          onClick={e => this.handleClick(e)}
        >
          {number}
        </li>
      );
    });

    return (
      <>
        <EventListStyle>{renderEvents}</EventListStyle>
        <EventPaginationStyle>{renderPageNumbers}</EventPaginationStyle>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps)(EventList);
