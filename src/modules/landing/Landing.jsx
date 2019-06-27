import React from 'react';
import { compose } from 'redux';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import styles from './LandingStyles';

class Landing extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.use}>
          <h1 className={classes.landingTitle}>
            Use our digital service for
          </h1>
          <div className={classes.useGrid}>
            <div className={classes.useElement}>
              <img src="/svg/001-bank.svg" alt="" className={classes.useImage}/>
              <div className={classes.useTitle}> Create an account</div>
              <div className={classes.useDescription}> 
                You can create an account in the currency you choose.
              </div>
            </div>
            <div className={classes.useElement}>
              <img src="/svg/004-budget.svg" alt="" className={classes.useImage}/>
              <div className={classes.useTitle}> Trust us with your money </div>
              <div className={classes.useDescription}> 
                You can transfer your money to your account and it will be safe with us.
              </div>
            </div>
            <div className={classes.useElement}>
              <img src="/svg/014-dollar-bill.svg" alt="" className={classes.useImage}/>
              <div className={classes.useTitle}> Transfer your money </div>
              <div className={classes.useDescription}> 
                You can transfer your money to other people in a secure way.
              </div>
            </div>
          </div>
        </div>

        <div className={classes.howItWorks}>
          <h2 className={classes.howItWorksTitle}>
            How it all works?
          </h2>
          <div className={classes.howItWorksParagraph}>
            Our application it is very simple to use. You create an account and then you are ready to add, withdraw
            and transfer the money from your account. We are very focused on simplicity so we made this app for you
            to manage all these operations in the simplest way possible.
          </div>
        </div>
      </div>
    );
  };
}

export default compose(withStyles(styles))(Landing);
