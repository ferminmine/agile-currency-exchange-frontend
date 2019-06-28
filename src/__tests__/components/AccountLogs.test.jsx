import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Landing from '../../modules/landing/Landing';
import store from '../../store/Store';

describe('Landing Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Landing />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
