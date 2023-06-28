import ActionTypes from "./actionType";
import apiMethod from "../../components/api/apiMethod";

export const getAll = () => async (dispatch) => {
  try {
    const res = await apiMethod.JoinAll();
    // console.log(res.data);
    dispatch({
      type: ActionTypes.GET_USERS,
      payload: res.data[0],
    });
  } catch (e) {
    alert(e);
  }
};

export const updateUser = (id, updatedUser) => async (dispatch) => {
  try {
    const res = await apiMethod.UpdatedUserandCust(id, updatedUser);
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: res.data[0],
    });
  } catch (error) {
    alert(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await apiMethod.DeleteUserAndCust(id);
    dispatch({
      type: ActionTypes.DEL_USER,
      payload: res.data,
    });
  } catch (e) {
    alert(e);
  }
};

export const GetProduct = () => async (dispatch) => {
  try {
    const res = await apiMethod.GetAllProduct();
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert(error);
  }
};

export const DeleteProducts = (id) => async(dispatch)=>{
    try {
        const res = await apiMethod.DeleteProduct(id)
        dispatch({
            type: ActionTypes.DEL_PRODUCT,
            payload: res.data
        })
    } catch (error) {
        alert(error)
    }
}

export const UpdateProducts = (id, product) => async(dispatch)=>{
    try {
        const res = await apiMethod.UpdateProduct(id, product)
        dispatch({
            type: ActionTypes.UPDATE_PRODUCT,
            payload: res.data
        })
    } catch (error) {
        alert(error)
    }
}