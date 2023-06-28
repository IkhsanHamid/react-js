import ActionTypes from "./actionType";
import apiMethod from "../../components/api/apiMethod";

export const getAll = (user) =>async(dispatch)=>{
    try{
        const res = await apiMethod.findAll()
        dispatch({
            type: ActionTypes.GET_USERS,
            payload: res.data
        })
    }catch(e){
        alert(e)
    }
}