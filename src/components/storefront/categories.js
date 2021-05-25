import { connect } from "react-redux";
import { activeCategory } from "../../store/categories";
import { AppBar } from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const displayCategory = (props) => {
  return (
    <>
      {/* From Here  */}
      <Paper position="static" square>
      <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
              aria-label="disabled tabs example"
            >
        {props.categories.categoriesLists.map((category) => {
          return (
              <Tab
                label={category.displayName}
                onClick={() => props.activeCategory(category.normalizedName)}
              />
           
          );
        })
        }
         </Tabs>
      </Paper>
      {/* To Here  */}
      {/* <ul>
        <h2>Browse our Categories</h2>
        {props.categories.categoriesLists.map((category) => {
          return (
            <li
              onClick={() => props.activeCategory(category.normalizedName)}
              key={category.normalizedName}
            >
              {category.displayName}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { categories: state.Categories };
};
const mapDispatchToProps = { activeCategory };
// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps, mapDispatchToProps)(displayCategory);
