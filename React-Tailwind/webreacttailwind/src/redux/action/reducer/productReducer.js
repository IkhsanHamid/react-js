import ActionTypes from "../actionType";

const initialState = {
    product: [],
    message: '',
    refresh: ''
}

function productReducers(state = initialState, action){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_PRODUCTS:
            return {state, product: payload, refresh: true};
        case ActionTypes.DEL_PRODUCT:
            return {refresh:false};
        case ActionTypes.UPDATE_PRODUCT:
            return {refresh:false}
        default:
            return state;
    }
}


export default productReducers;