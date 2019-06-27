import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { getAccountSelector } from './AccountSelectors';
import { getUserSelector } from '../user/UserSelectors';
import { fetchAccountInfo } from './AccountActions';
import styles from '../account/AccountStyles';
import Swal from 'sweetalert2';
import { addMoneyToAccountService } from '../../utils/ApiClient';
import PropTypes from 'prop-types';

class AddMoney extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    account: PropTypes.object,
    user: PropTypes.object.isRequired
  };

  addMoney = () => {
    Swal.fire({
      title: 'Select Amount',
      text: 'Please enter the amount of money you want to deposit',
      input: 'text',
      inputPlaceHolder: 'Enter the amount',
      inputAttributes: {
        autocapitalize: 'off'
      },
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Add Money!',
      showLoaderOnConfirm: true,
      preConfirm: value => {
        return addMoneyToAccountService(this.props.account.id, value)
          .then(result => 'ok')
          .catch(error => {
            Swal.showValidationMessage(`Request failed. Please try again.`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(result => {
      if (result.value) {
        this.props.fetchAccountInfo(this.props.user.id);
        Swal.fire({
          title: 'Success!',
          text: 'You just successfully added money to your account.',
          type: 'success'
        });
      }
    });
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.useElement}>
        <img
          src="/svg/012-growth.svg"
          alt="addMoney"
          className={classes.useImage}
          onClick={this.addMoney}
        />
        <div className={classes.useTitle}> Deposit Money </div>
        <div className={classes.useDescription}>
          Click in the image to deposit money in your account.
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
)(AddMoney);
