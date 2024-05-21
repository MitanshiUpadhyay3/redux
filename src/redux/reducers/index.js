import { combineReducers } from "redux";
import { addToCartProduct, productReducer, removeProduct, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: addToCartProduct,
    remove: removeProduct,
})

export default reducers