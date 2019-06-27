export default {
  formInput: {
    height: '3em',
    fontSize: '1.2em',
    marginTop: '2em',
    width: '60%',
    border: 0,
    borderBottom: '1px solid #c6c1c1',
    backgroundColor: 'transparent',
    color: '#868686',
    '&:focus': {
      outlineWidth: 0
    },
    textAlign: 'center'
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
  submitButton: {
    width: '15%',
    height: '3em',
    marginTop: '2.5em',
    border: 0,
    background: '#3c87e0',
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
