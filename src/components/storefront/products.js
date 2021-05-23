// Displays a list of products associated with the selected category

import { connect } from 'react-redux';
import {  activeCategory } from '../../store/categories';

const displayCategory = (props) => {
  return (
     <>
      <ul>
        {
          props.ProductsLists.map(product =>{
            return(
              <li onClick= {()=> props.activeCategory(product.categoryAssociation)} key={product.categoryAssociation}>
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
  return { candidates: state.counter.candidates };
};
const mapDispatchToProps = { increment, reset };
// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps, mapDispatchToProps)(displayCategory);