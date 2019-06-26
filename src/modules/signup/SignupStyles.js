import commonStyles from '../commons/CommonStyles';

export default {
  submitButtonContainer: {
    textAlign: 'center',
    marginBottom: '2em'
  },
  submitButton: { ...commonStyles.submitButton },
  formContainer: { ...commonStyles.formContainer },
  formInput: { ...commonStyles.formInput },
  signUpContainer: {
    marginTop: '4em',
    color: '#5c5c5c'
  },
  signUpTitleContainer: {
    textAlign: 'center'
  },
  signUpTitle: {
    color: '#6788bb',
    fontSize: '2.7em'
  },
  signUpDescription: {
    fontSize: '1.5em',
    fontWeight: '300',
    marginTop: '0.5em'
  },
  signUpFormContainer: {
    marginTop: '3em',
    display: 'flex',
    justifyContent: 'space-around'
  },
  errorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5em'
  },
  errorsBox: {
    backgroundColor: 'white',
    width: '30%',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '2px',
    opacity: 0.68,
    display: 'grid',
    gridGap: '5px'
  },
  errorMessage: {
    color: 'red'
  },
  errorField: {
    color: '#868698'
  }
};
