import { ActionTypes } from "../actionTypes/actionTypes";

export const setProduct = (product) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: product
    }
}
export const selectedProduct = (product) => {
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const addToCart = (product) => {
    return{
        type:ActionTypes.ADD_TO_CART,
        payload: product
    }
}
export const removeProduct = (productId) => {
    return{
        type:ActionTypes.REMOVE_PRODUCT,
        payload: productId
    }
}

