import { deleteProduct } from "../../store/products";
import React from "react";
import { connect } from "react-redux";
import { If, Else, Then } from "react-if";

function Cart(props) {
  return (
    <>
      <If condition={props.cart.cart > 0}>
        <Then>
          Cart:
          <ul>
            {props.cart.cart.map((product) => {
              <li>{product.name}</li>;
            })}
          </ul>
        </Then>
        <Else>
          <p>Your Cart Is Empty</p>
        </Else>
      </If>

      {console.log("cart component", props.cart.cart)}
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
