import React from 'react';
import Item from './Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  title: 'test',
  description: 'test description'
};

describe('<Item />', () => {
  it('renders Item properly', () => {
    const wrapper = shallow(<Item event={fakeItem} />);
    const title = wrapper.find('.event-item__title');
    const description = wrapper.find('.event-item__description');

    expect(title.text()).toBe('test');
    expect(description.text()).toBe('test description');
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Item event={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
