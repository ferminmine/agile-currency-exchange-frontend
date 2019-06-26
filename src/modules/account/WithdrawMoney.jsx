import React from 'react';
import withStyles from 'react-jss';
import { compose } from 'redux';
import styles from '../landing/LandingStyles';

class WithdrawMoney extends React.Component {

    render = () => {
        const { classes } = this.props;
        return (
          <div className={classes.useElement}>
            <img src="/svg/022-money bag.svg" alt="" className={classes.useImage}/>
            <div className={classes.useTitle}> Withdraw Money </div>
            <div className={classes.useDescription}> 
              Click in the image to withdraw money from your account.
            </div>
        </div>
        )
    }
}

export default compose(
  withStyles(styles)
)(WithdrawMoney);