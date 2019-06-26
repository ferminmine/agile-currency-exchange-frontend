import React from 'react';
import withStyles from 'react-jss';
import { compose } from 'redux';
import styles from '../landing/LandingStyles';

class AddMoney extends React.Component {

    render = () => {
        const { classes } = this.props;
        return (
          <div className={classes.useElement}>
            <img src="/svg/012-growth.svg" alt="" className={classes.useImage}/>
            <div className={classes.useTitle}> Deposit Money </div>
            <div className={classes.useDescription}> 
              Click in the image to deposit money in your account.
            </div>
        </div>
        )
    }
}

export default compose(
  withStyles(styles)
)(AddMoney);