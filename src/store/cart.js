const initialState = {
  cart: [],
  show: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get all products names, if it was not added before add it to the cart and put the count to 1, else incress the count by one each time, finally return the new state
    case "ADD":
      const products = state.cart.map((product) => product.name);
      if (!ProductsLists.includes(payload.name)) {
        payload.inCart = 1;
        return { cart: [...state.cart, payload], show: true };
      }

      const cartUpdated = state.cart.map((product) => {
        if (product.name === payload.name) {
          product.inCart++;
        }
        return product;
      });
      return { cart: cartUpdated, show: true };
    //===============================| Extra ===============================
    // case 'CLEAR':
    //   // return {cart:[],show:true}
    //   return state
    //======================================================================
    case "DELETE":
      // filter all cart based on the deleted product coming from payload then return it
      const newProducts = state.cart.filter(
        (product) => product.name !== payload.product.name
      );
      return { cart: newProducts, show: true };

    case "SHOW":
      // change drawer show false or true
      return { cart: state.cart, show: payload };

    default:
      return state;
  }
};

//actions
export const addProduct = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE",
    payload: product,
  };
};

export const showCart = (open) => {
  return {
    type: "SHOW",
    payload: open,
  };
};

// Cart
// State should be an array of products that have been added (all product details)
// Create an action that will trigger the reducer to add the selected item to the cart
// Hint: this could be the same action type as you create for the Products reducer
// Create a reducer that adds the product to the array of items in state
