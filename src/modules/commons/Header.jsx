import React from 'react';
import withStyles from 'react-jss';
import Menu from './Menu';

const styles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerImage: {
    height: '13em',
  },
  '@media (max-width: 650px)': {
    headerImage: {
      width: '100%'
    }
  }
};

class Header extends React.Component {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.headerContainer}>
        <img src="/header.jpeg" alt="App Header" className={classes.headerImage} />
        <Menu />
      </div>
    );
  };
}

export default withStyles(styles)(Header);
