import { deleteProduct } from "../../store/products";
import React from "react";
import { connect } from "react-redux";
import { If, Else, Then } from "react-if";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: 'right',
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Cart(props) {
  const classes = useStyles();
  let cart = props.cart.cart;

  return (
    <>
      <If condition={cart.length>0}>
        <Then>
          <div className={classes.root}>
            
            <Paper>
            Cart:
              {cart.map((product, i) => {
                // {console.log('inside the map',product)}
                if (cart.includes(product)) {
                  return (
                    <li style={{margin:'3px'}} key={product.name}>
                      {product.name} ({product.inCart})
                      {/* <button onClick={props.deleteProduct(product.name)}></button> */}
                    </li>
                  );
                }
              })}
            </Paper>
          </div>
        </Then>
        <Else>
        <div className={classes.root}>
        <Paper>
          <p>Your Cart Is Empty</p>
          </Paper>
          </div>
        </Else>
      </If>

      {/* {console.log("cart component", props.cart.cart)} */}
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { cart: state.Products };
};
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// Create a new Cart component to show the items in the user’s cart
// Add a new component to the page: <SimpleCart />
// Displays a short list (title only) of products in the cart
// This should be present at all times

// When a user clicks the “add to cart” button add the item to their cart
// In the <SimpleCart/> component, show a running list of the items in the cart (just the titles)
// Change the (0) indicator in the header to show the actual number of items in the cart
// Reduce the number in stock for that product
