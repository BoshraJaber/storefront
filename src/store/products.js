// import {  activeCategory } from './categories';

const initialState = {
    ProductsLists: [
      { categoryAssociation: 'ELECTRONICS', name: 'Computer' , description: 'Core i5 Intel', price: "700JD", inventoryCount : 6, img:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"},
      { categoryAssociation: 'ELECTRONICS', name: 'Phone' , description: 'iPhone with 3 cameras optimized battery life', price: "500JD", inventoryCount : 8, img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704" },

      { categoryAssociation: 'FOOD', name: 'Ice cream' , description: 'All flavor', price: "10JD", inventoryCount : 18, img:"https://littlefaifo.com/wp-content/uploads/2021/03/ourstory_012-6.jpg" },
      { categoryAssociation: 'FOOD', name: 'Cake' , description: 'sweet', price: "10JD", inventoryCount : 18, img:"https://tatyanaseverydayfood.com/wp-content/uploads/2018/07/Summer-Sangria-Cake-4.jpg" },
      { categoryAssociation: 'FOOD', name: 'PanCake' , description: 'Dessert', price: "10JD", inventoryCount : 18 ,img:"https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/11/whole-grain-pancake-stack.jpg?fit=1200%2C879&ssl=1"},
    ],
};


const products = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE':
        let ProductsLists = initialState.ProductsLists.filter((product) => {
            return product.categoryAssociation === payload;
          })
          console.log('ProductsLists',ProductsLists)
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