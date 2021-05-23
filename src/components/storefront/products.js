// Displays a list of products associated with the selected category

import { connect } from 'react-redux';
import {  activeCategory } from '../../store/categories';

const displayProducts = (props) => {
  return (
     <>
      <ul>
        {
          props.products.ProductsLists.map(product =>{
            return(
              <li key={product.categoryAssociation}>
                {product.name}
              </li>
            )
          })
        }
      </ul>
  </>)
};
const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.Products};
};
const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(displayProducts);