import React from "react";
import { AppBar, Typography, Toolbar, Link, Grid } from "@material-ui/core/";
import purple from '@material-ui/core/colors/purple';
import { connect } from "react-redux";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: purple[500],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

const Header = (props) => {
  let cart = props.cart.cart;
  return (
    <header>
      {/* <h1>Boshra Store</h1>
      <nav className="nav">
        <h1> Cart (0) </h1>
      </nav> */}
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit" noWrap>
          
                Boshra Store
              
            </Typography>
            Cart ({cart.length})
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};


const mapStateToProps = (state) => {
  // console.log(state);
  return { cart: state.Products };
};
// const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps)(Header);


// export default Header;
