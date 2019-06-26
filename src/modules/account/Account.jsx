import React from 'react';
import { compose, bindActionCreators } from 'redux';
import withStyles from 'react-jss';
import styles from './AccountStyles';
import AddMoney from './AddMoney';
import WithdrawMoney from './WithdrawMoney';
import TransferMoney from './TransferMoney';

class Account extends React.Component {

  componentDidMount = () => {
    
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.accountContainer}>
        <div className={classes.accountTitle}> 
          Account Information
        </div>
        <div className={classes.accountSubTitle}>
          Fermin Minetto's Ownership
        </div>

        <div className={classes.financialDataRow}>
          <div className={classes.balanceBox}>
              <div className={classes.balanceNumber}> 1.000.000 </div>
              <div className={classes.balanceMoneySymbol}> $ </div>
          </div>

          <div className={classes.currencyContainer}>
            <div className={classes.currencyCode}> ARS </div>
            <div className={classes.currencyName}> Argentinian Pesos </div>
          </div>


        </div>

        <div className={classes.accountActionsContainer}>
          <AddMoney />
          <WithdrawMoney />
          <TransferMoney />
        </div>
      
      </div>
      
    )
  }
}

export default compose(
  withStyles(styles)
)(Account);
