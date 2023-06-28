import ActionTypes from "../actionType";

const initialState = {
    user: [],
    message: '',
    refresh: ''
}

function userReducers(state = initialState, action){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_USERS:
            return {state, user: payload, refresh: true};
        case ActionTypes.UPDATE_USER:
            return {refresh: false};
        case ActionTypes.DEL_USER:
            return {refresh: false};
        default:
            return state;
    }
}


export default userReducers;