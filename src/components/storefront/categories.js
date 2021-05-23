// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import { connect } from 'react-redux';
import {  activeCategory } from '../../store/categories';

const displayCategory = (props) => {
  return (
     <>
      <ul>
        {
          props.categories.categoriesLists.map(category =>{
            return(
              <li onClick= {()=> props.activeCategory(category.normalizedName)} key={category.normalizedName}>
                {category.displayName}
              </li>
            )
          })
        }
      </ul>
  </>)
};
const mapStateToProps = (state) => {
  console.log(state);
  return { categories: state.Categories };
};
const mapDispatchToProps = { activeCategory };
// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps, mapDispatchToProps)(displayCategory);
