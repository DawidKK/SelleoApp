import React from 'react';

import EventList from '../../components/Event/List/List';
import SearchBarInput from '../../components/SearchBar/Input';

const ScreensEventList = () => {
  return (
    <>
      <SearchBarInput />
      <EventList />
    </>
  );
};

export default ScreensEventList;
