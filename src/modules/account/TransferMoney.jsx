import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { getAccountSelector } from './AccountSelectors';
import { getUserSelector } from '../user/UserSelectors';
import { fetchAccountInfo } from './AccountActions';
import styles from '../account/AccountStyles';
import Swal from 'sweetalert2';
import { transferMoneyToAccountService } from '../../utils/ApiClient';

class TransferMoney extends React.Component {

  sweetAlertBaseMessageCreator = () => ({
    showCancelButton: false,
    confirmButtonText: 'Continue',
    allowOutsideClick: false
  });

  executeTransfer = async (amount, accountID) => {
    const sweetAlertBaseMessage = this.sweetAlertBaseMessageCreator();
    try {
      await transferMoneyToAccountService(this.props.account.id, amount, accountID);
      this.props.fetchAccountInfo(this.props.user.id);
      await Swal.fire({
        ...sweetAlertBaseMessage,
        title: 'Success!',
        text: 'You just successfully transfered money to the other account.',
        type: 'success'
      });
    } catch {
      await Swal.fire({
        ...sweetAlertBaseMessage,
        title: 'Error!',
        text: 'There has been an error while transfering money. Please try again using correct values.',
        type: 'error'
      });
    }
  }

  transferMoney = () => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Select Amount',
        text: 'Please enter the amount of money you want to transfer'
      },
      {
        title: 'Select Account ID',
        text: 'Please enter the ID number of the account you want to transfer money'
      }
    ]).then((result) => {
      if (result.value) {
        this.executeTransfer(result.value[0], result.value[1])
      }
    })
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.useElement}>
        <img
          src="/svg/014-dollar-bill.svg"
          alt="transferMoney"
          className={classes.useImage}
          onClick={this.transferMoney}
        />
        <div className={classes.useTitle}> Transfer Money </div>
        <div className={classes.useDescription}>
          Click in the image to transfer money to another account.
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  account: getAccountSelector(state),
  user: getUserSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccountInfo
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(TransferMoney);
