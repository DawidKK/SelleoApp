import React from 'react';
import Mockdate from 'mockdate'
import moment from 'moment'
import { shallow } from 'enzyme';
import UserBoard from '..';

describe('MyComponent', () => {
  const res = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }

  const defaultProps = {
    today: Mockdate.set(moment('11-19-2019'))
  }

  it('renders', () => {
    const wrapper = shallow(<UserBoard {...defaultProps} />)
    wrapper.instance().fetchUser = Promise.resolve(res)

    return wrapper.instance().fetchUser.then(response => {
      expect(response).toEqual(res)
    })
  });

  it('displays proper date', () => {
    const wrapper = shallow(<UserBoard {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })
});
