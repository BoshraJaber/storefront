const initialState = {
    categoriesLists: [
      { normalizedName: 'ELECTRONICS', displayName: 'Electronics' , description: 'Here is some description of the electronics we sell'},
      { normalizedName: 'FOOD', displayName: 'Food' , description: 'Here is some description of the Food we sell'},
      { normalizedName: '', dispClotheslayName: 'Clothes' , description: 'Here is some description of the electronics we sell'},
    ],
    activeCategory: null,
  };

  const categories = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE':
        const activeCategory = payload;
        const categoriesLists = state.categoriesLists;
        return { categoriesLists, activeCategory };
    //   case 'RESET':
    //     return initialState;
      default:
        return state;
    }
  };
  
  export default categories;

  
  // Actions:
  // Create an action that will trigger the reducer to change the active category
  export const activeCategory = (categoryName) => {
    return {
      type: 'ACTIVE',
      payload: categoryName,
    };
  };




// Categories
// State should contain a list of categories as well as the active category
// Each category should have a normalized name, display name, and a description
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched