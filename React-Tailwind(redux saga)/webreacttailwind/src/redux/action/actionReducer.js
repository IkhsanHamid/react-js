import ActionTypes from "./actionType";

export const getAll = () =>{
  return {
    type: ActionTypes.GET_USERS
  }
};
export const getAllResponse = (payload) =>{
  return {
    type: ActionTypes.GET_USERS_RESPONSE,
    payload
  }
};
export const addUser = (payload) =>{
  return {
    type: ActionTypes.ADD_USER,
    payload
  }
};
export const addUserResponse = (payload) =>{
  return {
    type: ActionTypes.ADD_USER_RESPONSE,
    payload
  }
};
export const updateUser = (payload) =>{
  return {
    type: ActionTypes.UPDATE_USER,
    payload
  }
};
export const updateUserResponse = (payload) =>{
  return {
    type: ActionTypes.UPDATE_USER_RESPONSE,
    payload
  }
};
export const deleteUser = (payload) =>{
  return {
    type: ActionTypes.DEL_USER,
    payload
  }
};
export const deleteUserResponse = (payload) =>{
  return {
    type: ActionTypes.DEL_USER_RESPONSE,
    payload
  }
};
export const getAllProduct = () =>{
  return {
    type: ActionTypes.GET_PRODUCTS
  }
};
export const getAllProductResponse = (payload) =>{
  return {
    type: ActionTypes.GET_PRODUCTS_RESPONSE,
    payload
  }
};
export const addProduct = (payload) =>{
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload
  }
};
export const addProductResponse = (payload) =>{
  return {
    type: ActionTypes.ADD_PRODUCT_RESPONSE,
    payload
  }
};
export const updateProduct = (payload) =>{
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload
  }
};
export const updateProductResponse = (payload) =>{
  return {
    type: ActionTypes.UPDATE_PRODUCT_RESPONSE,
    payload
  }
};
export const deleteProduct = (payload) =>{
  return {
    type: ActionTypes.DEL_PRODUCT,
    payload
  }
};
export const deleteProductResponse = (payload) =>{
  return {
    type: ActionTypes.DEL_PRODUCT_RESPONSE,
    payload
  }
};

