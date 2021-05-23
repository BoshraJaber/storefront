// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import { connect } from 'react-redux';
import {  activeCategory } from '../../store/categories';

const displayCategory = (props) => {
  return (
     <>
      <ul>
        {
          props.categoriesLists.map(category =>{
            return(
              <li onClick= {()=> props.activeCategory(category.normalizedName)} key={category.normalizedName}>
                {candidate.displayName}
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
