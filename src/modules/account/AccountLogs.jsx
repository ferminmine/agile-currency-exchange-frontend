import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import withStyles from 'react-jss';
import styles from '../landing/LandingStyles';
import { getAccountLogsSelector, getAccountSelector } from '../account/AccountSelectors';
import { fetchAccountLogsInfo } from '../account/AccountActions';
import { getUserSelector } from '../user/UserSelectors';

class AccountLogs extends React.Component {
  componentDidMount = () => {
    this.props.fetchAccountLogsInfo(this.props.user.id);
  };

  componentDidUpdate = (prevProps) => {
    const { account, user, fetchAccountLogsInfo } = this.props;
    if (account && prevProps.account && account.balance !== prevProps.account.balance) {
      fetchAccountLogsInfo(user.id);
    }
  }

  render = () => {
    const { classes, accountLogs, account } = this.props;
    return (
      <table>
        <tr>
          <th> Transaction Type </th>
          <th> Value </th>
          <th> Account New Value </th>
        </tr>
        {accountLogs &&
          accountLogs.map(log => (
            <tr>
              <td> {log.transaction_type} </td>
              <td>
                {' '}
                {log.transaction_type === 'income' && '+'} 
                {log.transaction_type === 'withdraw' && '-'}
                {log.transaction_type === 'transfer' && account && log.receiver_id === account.id && '+' }
                {log.transaction_type === 'transfer' && account && log.receiver_id !== account.id && '-' }
                {log.value_modified_sender}{' '}
              </td>
              <td> {log.transaction_type !== 'transfer' && log.account_new_value.toFixed(2)} </td>
            </tr>
          ))}
      </table>
    );
  };
}

const mapStateToProps = state => ({
  user: getUserSelector(state),
  account: getAccountSelector(state),
  accountLogs: getAccountLogsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAccountLogsInfo
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(AccountLogs);
