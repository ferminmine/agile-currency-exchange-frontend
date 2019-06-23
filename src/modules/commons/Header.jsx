import React from 'react';
import withStyles from 'react-jss';
import Menu from './Menu';

const styles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10%',
    paddingRight:' 10%'
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
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qwv7ozuo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/17agn4hvbtp33fmjuelc.png" alt="App Header" className={classes.headerImage} />
        <Menu />
      </div>
    );
  };
}

export default withStyles(styles)(Header);
