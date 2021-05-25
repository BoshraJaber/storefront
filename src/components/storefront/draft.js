import { If, Else, Then } from "react-if";
import { connect } from "react-redux";
import { activeCategory } from "../../store/categories";
import {Button} from '@material-ui/core/';

const displayProducts = (props) => {
  return (
    <>
      <ul>
        <If condition={props.categories.activeCategory !== null}>
          <Then>
            {props.products.ProductsLists.map((product) => {
              return <li key={product.name}>{product.name}</li>;
            })}
          </Then>
          <Else>
            <p>Choose a Category to start</p>
          </Else>
        </If>
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.Products, categories: state.Categories };
};
const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(displayProducts);
