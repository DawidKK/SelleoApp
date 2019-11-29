import React, { Component } from 'react'

class EventForm extends Component {
  render() {
    const addEvent = this.props.addEvent;
    let input;

    return (
      <div className="EventForm">
        <input
          type="text"
          data-testid="EventForm-input"
          className="EventForm-input"
          placeholder="Add event"
          ref={node => {
            input = node;
          }}
        />
        <button
          className="EventForm-button"
          onClick={() => {
            addEvent({ text: input.value});
            input.value = '';
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default EventForm
