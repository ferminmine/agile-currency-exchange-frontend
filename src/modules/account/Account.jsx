import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import withStyles from 'react-jss';
import styles from './AccountStyles';
import AddMoney from './AddMoney';
import WithdrawMoney from './WithdrawMoney';
import TransferMoney from './TransferMoney';
import { fetchAccountInfo } from './AccountActions';

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
              <div className={classes.balanceNumber}> { account.balance } </div>
              <div className={classes.balanceMoneySymbol}> { account.currency.symbol } </div>
          </div>

          <div className={classes.currencyContainer}>
            <div className={classes.currencyCode}> { account.currency.code } </div>
            <div className={classes.currencyName}> { account.currency.name_plural } </div>
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

const mapStateToProps = state => ({
  user: state.user.user,
  account: state.account.account
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccountInfo
}, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Account);
