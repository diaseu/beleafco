import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    // marginTop: 82,
  },
  media: {
    height: 0,
    paddingTop: '66.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  price: {
    // padding: 10,
    // textAlign: 'center',
  },
  chip: {
    // display: 'block',
    position: 'relative',
    top: -20,
    left: 10,
    marginBottom: 0,
    
  }
}))