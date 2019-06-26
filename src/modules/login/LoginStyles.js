import commonStyles from '../commons/CommonStyles';

const styles = {
  submitButton: { ...commonStyles.submitButton },
  formContainer: { ...commonStyles.formContainer },
  formInput: { ...commonStyles.formInput },
  loginContainer: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginTitle: {
    padding: 0,
    margin: 0,
    fontWeight: 400,
    fontSize: '2.5em',
    color: '#6788bb'
  }
};

export default styles;
