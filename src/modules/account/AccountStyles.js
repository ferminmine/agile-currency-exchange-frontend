import landingStyles from '../landing/LandingStyles';

export default {
  ...landingStyles,
  useImage: {
    ...landingStyles.useImage,
    '&:hover': {
      opacity: 0.8,
      transition: '0.3s opacity',
      cursor: 'pointer'
    }
  },
  accountContainer: {
    marginTop: '3em',
    color: '#5c5c5c'
  },
  accountTitle: {
    color: '#6788bb',
    fontSize: '2.7em',
    textAlign: 'center'
  },
  accountSubTitle: {
    fontSize: '1.5em',
    textAlign: 'center',
    marginTop: '0.5em',
    fontWeight: '300'
  },
  financialDataRow: {
    marginTop: '5em',
    display: 'flex',
    justifyContent: 'space-around'
  },
  balanceBox: {
    backgroundColor: '#eff1f3',
    width: '30%',
    borderRadius: '2px',
    paddingTop: '20px',
    paddingBottom: '20px',
    opacity: 0.68,
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    fontSize: '1.9em',
    fontWeight: 300,
    alignItems: 'center'
  },
  balanceNumber: {
    gridColumn: '2 / span 1',
    textAlign: 'center',
    borderBottom: '1px solid gray',
    paddingBottom: '0.5px'
  },
  balanceMoneySymbol: {
    textAlign: 'left'
  },
  currencyContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  currencyCode: {
    textAlign: 'center',
    background: '#eff1f3',
    borderRadius: '2em',
    width: '105px',
    height: '4em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.7em',
    fontWeight: 300
  },
  currencyName: {
    marginTop: '0.5em',
    fontSize: '1.3em',
    fontWeight: 300
  },
  accountActionsTitle: {
    color: '#6788bb',
    fontSize: '2.7em',
    textAlign: 'center',
    marginTop: '1em',
    marginBottom: '1em'
  },
  accountActionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '4em'
  },
  accountLogsContainer: {
    width: '60%',
    margin: '0 auto',
    marginTop: '5em',
    marginBottom: '5em'
  },
  accountLogsTitle: {
    marginBottom: '1em'
  }
};
