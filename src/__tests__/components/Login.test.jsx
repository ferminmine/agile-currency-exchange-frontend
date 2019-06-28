import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Login from '../../modules/login/Login';
import store from '../../store/Store';

describe('Login Component Test', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
