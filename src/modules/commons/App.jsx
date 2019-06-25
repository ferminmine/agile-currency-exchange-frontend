import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import withStyles from 'react-jss';
import { PersistGate } from 'redux-persist/integration/react';
import ViewsContainer from './ViewsContainer';
import styles from './AppStyles';
import './body.css';
import store, { history, persistor } from '../../store/Store';
import Header from './Header';

const App = ({ classes }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div className={classes.appStyles}>
          <Header />
          <div className={classes.contentContainer}>
            <ViewsContainer />
          </div>
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default withStyles(styles)(App);
