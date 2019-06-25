const menuItemBase = {
  color: 'white',
  padding: '15px'
};

export default {
  menuContainer: {
    backgroundColor: '#6788bb',
    display: 'flex'
  },
  menuItem: {
    ...menuItemBase,
    '&:hover': {
      backgroundColor: '#8097ba',
      cursor: 'pointer',
      transition: '0.3s background-color'
    }
  },
  menuItemBase: {
    ...menuItemBase
  },
  menuItemLeft: {
    flex: 1,
    display: 'flex',
    justifyContent: 'right'
  }
};
