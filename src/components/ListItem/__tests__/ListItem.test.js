import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '..';

describe('MyComponent', () => {
  it('renders', () => {
    const component = shallow(<ListItem children="elo" />);
    expect(component).toMatchSnapshot();
  });
});
