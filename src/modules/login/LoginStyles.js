const styles = {
  loginContainer: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    background: '#fafafa',
    padding: '50px',
    paddingBottom: '70px',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
  },
  loginTitle: {
    padding: 0,
    margin: 0,
    fontWeight: 300,
    fontSize: '2.5em',
    color: '#5694f5'
  },
  loginInput: {
    height: '3em',
    fontSize: '1.2em',
    marginTop: '2em',
    width: '60%',
    border: 0,
    borderBottom: '1px solid #c6c1c1',
    mozPlaceholder: 'center',
    color: '#868686'
  },
  submitButton: {
    width: '15%',
    height: '3em',
    marginTop: '2.5em',
    border: 0,
    background: '#6788bb',
    color: 'white',
    fontSize: '1.2em',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    '&:hover': {
      opacity: 0.9,
      cursor: 'pointer',
      transition: '0.3s opacity'
    }
  }
};

export default styles;
