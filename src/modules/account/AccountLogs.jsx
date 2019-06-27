import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { getAccountLogsSelector, getAccountSelector } from '../account/AccountSelectors';
import { fetchAccountLogsInfo } from '../account/AccountActions';
import { getUserSelector } from '../user/UserSelectors';
import PropTypes from 'prop-types';

class AccountLogs extends React.Component {

  static propTypes = {
    fetchAccountLogsInfo: PropTypes.func.isRequired,
    accountLogs: PropTypes.array,
    account: PropTypes.object,
    user: PropTypes.object.isRequired
  };

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
    const { accountLogs, account } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th> Transaction Type </th>
            <th> Value </th>
            <th> Account New Value </th>
          </tr>
        </thead>
        <tbody>
          {accountLogs &&
            accountLogs.map(log => (
              <tr key={log.id}>
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
        </tbody>
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
  )
)(AccountLogs);
