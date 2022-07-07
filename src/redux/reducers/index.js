// ***we have created the reducers already & now going to combine the reducers ********
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});
export default reducers;
