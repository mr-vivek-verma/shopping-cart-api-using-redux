// ***we have created the reducers already & now going to combine the reducers ********
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
});
export default reducers;
