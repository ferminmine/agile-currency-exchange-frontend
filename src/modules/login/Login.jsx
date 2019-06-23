import React from 'react';
import withStyles from 'react-jss';
import styles from './LoginStyles';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  attemptLogin = event => {

  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <div className={classes.formContainer}>
          <h2 className={classes.loginTitle}> Login </h2>
          <input
            className={classes.loginInput}
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.onInputChange}
          ></input>
          <input
            className={classes.loginInput}
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onInputChange}
          ></input>
        </div>
        <button className={classes.submitButton} onClick={this.attemptLogin}> Submit </button>
      </div>
    );
  };
}

export default withStyles(styles)(Login);
