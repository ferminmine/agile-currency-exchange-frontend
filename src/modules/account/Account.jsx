import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import withStyles from 'react-jss';
import styles from './AccountStyles';
import AddMoney from './AddMoney';
import WithdrawMoney from './WithdrawMoney';
import TransferMoney from './TransferMoney';
import { fetchAccountInfo } from './AccountActions';
import AccountLogs from './AccountLogs';
import { getAccountSelector } from './AccountSelectors';

class Account extends React.Component {

  componentDidMount = () => {
    this.props.fetchAccountInfo(this.props.user.id);
  }

  render = () => {
    const { classes } = this.props;
    const { account, user } = this.props;
    return (
      <div className={classes.accountContainer}>
        <div className={classes.accountTitle}> 
          Account Information
        </div>
        <div className={classes.accountSubTitle}>
          Ownership: { user.username }
        </div>

        <div className={classes.financialDataRow}>
          <div className={classes.balanceBox}>
              <div className={classes.balanceNumber}> { account && account.balance.toFixed(2) } </div>
              <div className={classes.balanceMoneySymbol}> { account && account.currency.symbol } </div>
          </div>

          <div className={classes.currencyContainer}>
            <div className={classes.currencyCode}> { account && account.currency.code } </div>
            <div className={classes.currencyName}> { account && account.currency.name_plural } </div>
          </div>


        </div>

        <div className={classes.accountActionsTitle}> 
          Account Actions
        </div>
        <div className={classes.accountActionsContainer}>
          <AddMoney />
          <WithdrawMoney />
          <TransferMoney />
        </div>

        <div className={classes.accountLogsContainer}>
          <div className={`${classes.accountTitle} ${classes.accountLogsTitle}`}> Account Log </div>
          <AccountLogs account={account} />
        </div>
      
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  account: getAccountSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccountInfo
}, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Account);
