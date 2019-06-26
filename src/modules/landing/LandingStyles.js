export default {
  use: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1em',
    flexDirection: 'column'
  },
  landingTitle: {
    color: '#6788bb',
    fontSize: '2.5em'
  },
  useGrid: {
    marginTop: '1em',
    display: 'grid',
    gridTemplate: 'auto / repeat(3, 1fr)',
    gridGap: '5%',
    width: '80%',
    color: '#5c5c5c'
  },
  useImage: {
    height: '5em'
  },
  useElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  useTitle: {
    fontSize: '1.15em',
    marginTop: '1em',
    marginBottom: '0.5em',
    color: '#2f9ad4',
    fontWeight: 500
  },
  useDescription: {
    width: '80%'
  },
  howItWorks: {
    marginTop: '2em'
  },
  howItWorksTitle: {
    color: '#6788bb',
    fontSize: '2.5em'
  },
  '@media (max-width: 650px)': {
    shipPlacementContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
};
