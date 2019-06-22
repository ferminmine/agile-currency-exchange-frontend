import React from 'react';
import { compose } from 'redux';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import styles from './LandingStyles';

class Landing extends React.Component {
  static propTypes = {};

  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.use}>
          <h1 className={classes.landingTitle}>
            Use our digital service for
          </h1>
          <div className="">

          </div>
        </div>

        <div className={classes.howItWorks}>
          <h2 className={classes.howItWorksTitle}>
            How it all works?
          </h2>
          <div className="">
            
          </div>
        </div>
      </div>
    );
  };
}

export default compose(withStyles(styles))(Landing);
