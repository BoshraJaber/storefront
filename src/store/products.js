import {  activeCategory } from './categories';

const initialState = {
    ProductsLists: [
      { categoryAssociation: 'ELECTRONICS', name: 'Computer' , description: 'Core i5 Intel', price: "700JD", inventoryCount : 6 },

      { categoryAssociation: 'FOOD', name: 'Ice cream' , description: 'All flavor', price: "10JD", inventoryCount : 18 },
    ],
};


const products = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE':
        let ProductsLists = initialState.ProductsLists.filter((product) => {
            return product.categoryAssociation === payload;
          })
          console.log(ProductsLists)
          return {ProductsLists }

      default:
        return state;
    }
  };
  
  export default products;









// Products
// State should be a list of all products
// Each product should have a category association, name, description, price, inventory count
// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category