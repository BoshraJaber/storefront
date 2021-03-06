import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// Footer Component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        FrontStore 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer = ()=>{
  const classes = useStyles();
    return(
    //   <footer>
    //   <p>&copy; 2021 Boshra Jaber </p>
    //   <p>React + Redux + Material UI </p>
    // </footer>
    <div className={classes.root}>
    <CssBaseline />
    {/* <Container component="main" className={classes.main} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Sticky footer
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Pin a footer to the bottom of the viewport.'}
        {'The footer will move as the main element of the page grows.'}
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </Container> */}
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">Boshra Jaber</Typography>
        <Copyright />
      </Container>
    </footer>
  </div>
    )
}
  

export default Footer;