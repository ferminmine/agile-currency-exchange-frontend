import React from 'react';
import withStyles from 'react-jss';

const styles = {
  menuContainer: {
    backgroundColor: '#6788bb',
    display: 'flex'
  },
  menuItem: {
    color: 'white',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#8097ba',
      cursor: 'pointer',
      transition: '0.3s background-color'
    }
  },
  menuItemLeft: {
    flex: 1,
    display: 'flex',
    justifyContent: 'right'
  }
};

class Menu extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.menuContainer}>
        <div className={classes.menuItem}>Home</div>
        <div className={classes.menuItem}>Sign Up</div>
        <div className={classes.menuItem}>About</div>
        <div className={classes.menuItemLeft}>
          <div className={classes.menuItem}>About</div>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(Menu);
