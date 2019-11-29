import React from 'react';
import { mount } from 'enzyme';
import Event from '..';

const wait = (wrapper, predicate, timeout = 10) => {
  return new Promise((resolve, reject) => {
    if (predicate(wrapper)) {
      return resolve(true);
    }
    setTimeout(() => {
      wrapper.update();
      return predicate(wrapper) ? resolve(true) : reject(new Error('Timeout expired'));
    }, timeout);
  });
};

test('entering an event in form adds a event', async () => {
  const wrapper = mount(<Event />);

  wrapper.find('.EventForm-input').instance().value = 'Add event';

  wrapper.find('.EventForm-button').simulate('click');

  await wait(wrapper, w =>
    w
      .find('.EventItem')
      .at(1)
      .exists()
  );

  expect(wrapper.find('.EventForm-input').instance().value).toEqual('');

  const newText = wrapper
    .find('.EventItem')
    .at(1)
    .find('.EventItem-text')
    .text();
  expect(newText).toEqual('Add event');
});
