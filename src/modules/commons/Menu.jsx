import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import withStyles from 'react-jss';
import { push } from 'connected-react-router';
import { resetApp } from '../../store/Store';
import styles from './MenuStyles';

class Menu extends React.Component {

  resetApp = () => {
    localStorage.removeItem('userAccessToken');
    localStorage.removeItem('userRefreshToken');
    this.props.resetApp();
  }


  render = () => {
    const { classes, user, push } = this.props;
    return (
      <div className={classes.menuContainer}>
        <div onClick={() => push('/')} className={classes.menuItem}>Home</div>
        { !user && (
          <div onClick={() => this.props.push('/signup')} className={classes.menuItem}>Sign Up</div>
        )}
        { user && (
          <div onClick={() => this.props.push('/account')} className={classes.menuItem}> Account </div>
        )}
        <div className={classes.menuItemLeft}>
          { user ? (
            <React.Fragment>
              <div className={classes.menuItemBase}>
                Welcome, {user.username}!
              </div>
              <div onClick={this.resetApp} className={classes.menuItem}>
                Logout
              </div>
            </React.Fragment>
          ) : (
            <div onClick={() => push('/login')} className={classes.menuItem}>
              Login
            </div>
          ) }
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  resetApp,
  push
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Menu);
