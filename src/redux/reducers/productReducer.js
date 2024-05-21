import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
    products: []
}

const cartState = {
    pros: []
}
export const productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
    
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_PRODUCT:
            return {}
    
        default:
            return state;
    }
}

export const addToCartProduct = (state = cartState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {...state, pros: [...state.pros, payload]}
        
    
        default:
            return state;
    }
}
export const removeProduct = (state = cartState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.REMOVE_PRODUCT:
            // console.log("Removing product:", payload); 
            return {
                ...state,
                pros: state.pros.filter((product) => product.id !== payload),
              };
        
    
        default:
            return state;
    }
}
