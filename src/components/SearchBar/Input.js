import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchEvent } from '../../actions/searchBarInputActions';

class SearchBarInput extends Component {
  handleChange = e => {
    this.props.searchEvent({
      term: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input onChange={e => this.handleChange(e)} type="text" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchEvent: data => {
      dispatch(searchEvent(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBarInput);
