import React from 'react';
import withStyles from 'react-jss';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { fetchCurrencies } from '../currencies/CurrenciesActions';
import { registerUserService } from '../../utils/ApiClient';
import styles from './SignupStyles';
import { push } from 'connected-react-router';

class Signup extends React.Component {
  state = {
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    password: null,
    currency_id: null,
    errors: null
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = () => {
    this.props.fetchCurrencies();
  };

  onCurrencyChange = event => this.setState({ currency_id: event.target.value });

  attemptSignUp = async () => {
    const user = { ...this.state };
    const result = await registerUserService(user);
    if (result.errors) {
      this.setState({ errors: result.errors });
    } else {
      await Swal.fire({
        showCancelButton: false,
        confirmButtonText: 'Continue to Login',
        allowOutsideClick: false,
        title: 'Welcome!',
        text: `You just successfully created your account. We are happy to have you with us! You can now proceed to
         log in with your credentials.`,
        type: 'success'
      });
      this.props.push('/login');
    }
  };

  render = () => {
    const { classes, currencies } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.signUpContainer}>
        <div className={classes.signUpTitleContainer}>
          <div className={classes.signUpTitle}> Sign Up </div>
          <div className={classes.signUpDescription}>
            {' '}
            Please fill the form to start your account.{' '}
          </div>
        </div>

        {errors && (
          <div className={classes.errorsContainer}>
            <div className={classes.errorsBox}>

            
              {Object.keys(errors).map(value => (
                <div className={classes.errorMessage}>
                  {' '}
                  <span className={classes.errorField}> {value}: </span> {errors[value]}{' '}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={classes.signUpFormContainer}>
          <div className={classes.formContainer}>
            <input
              className={classes.formInput}
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.onInputChange}
            ></input>
            <input
              className={classes.formInput}
              type="text"
              placeholder="First Name"
              name="first_name"
              onChange={this.onInputChange}
            ></input>
            <input
              className={classes.formInput}
              type="text"
              placeholder="Last Name"
              name="last_name"
              onChange={this.onInputChange}
            ></input>
          </div>

          <div className={classes.formContainer}>
            <input
              className={classes.formInput}
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.onInputChange}
            ></input>
            <input
              className={classes.formInput}
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.onInputChange}
            ></input>
            <select
              className={classes.formInput}
              placeholder="Currency"
              name="password"
              onChange={this.onCurrencyChange}
            >
              {currencies &&
                currencies.map(currency => (
                  <option value={currency.id}>
                    {currency.code} - {currency.name}{' '}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className={classes.submitButtonContainer}>
          <button className={classes.submitButton} onClick={this.attemptSignUp}>
            {' '}
            Send my data!{' '}
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  currencies: state.currencies.currencies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
      fetchCurrencies
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Signup);
