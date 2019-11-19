import React from 'react';
import moment from 'moment'

import UserBoard from '../../components/Evaluation/UserBoard';

const ScreensUserBoard = () => {
  const today = moment().format('MM-DD-YYYY')
  return <UserBoard today={today} />;
};

export default ScreensUserBoard;
