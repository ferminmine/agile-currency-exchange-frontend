const menuItemBase = {
  color: 'white',
  padding: '15px'
};

export default {
  menuContainer: {
    background: '#9bc8ff',
    display: 'flex',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  menuItem: {
    ...menuItemBase,
    '&:hover': {
      backgroundColor: '#438de9',
      cursor: 'pointer',
      transition: '0.3s background-color',
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
