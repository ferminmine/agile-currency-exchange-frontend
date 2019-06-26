import React from 'react';
import withStyles from 'react-jss';
import { compose } from 'redux';
import styles from '../landing/LandingStyles';

class TransferMoney extends React.Component {

    render = () => {
        const { classes } = this.props;
        return (
          <div className={classes.useElement}>
            <img src="/svg/014-dollar-bill.svg" alt="" className={classes.useImage}/>
            <div className={classes.useTitle}> Transfer Money </div>
            <div className={classes.useDescription}> 
              Click in the image to transfer your money to other user in a secure way.
            </div>
        </div>
        )
    }
}

export default compose(
  withStyles(styles)
)(TransferMoney);