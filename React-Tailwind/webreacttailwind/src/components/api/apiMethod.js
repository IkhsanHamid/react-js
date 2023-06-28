import axios from "../config/endpoint";

const findAll = () => {
  return axios.get("/user-dto/Alluser");
};

const JoinAll = () => {
  return axios.get("/user/JoinCustUs");
};

const Create = (data) => {
  return axios.post("/user-dto/InsertUser", data);
};

const GetbyId = (id) => {
  return axios.get(`/user-dto/findOneUser/${id}`);
};

const UpdatedUserandCust = (data) => {
  return axios.put(`/user-dto/updateUser/${data.user_id}`, data);
};

const DeleteUserAndCust = (id) => {
  // console.log(id);
  return axios.delete(`/user-dto/deleteUser/${id}`);
};

const GetAllProduct = () => {
  return axios.get("/product-dto/AllProducts");
};

const CreateProduct = (data) => {
  return axios.post("/product-dto/uploads", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

const DeleteProduct = (id) => {
  return axios.delete(`/product-dto/deleteProduct/${id}`);
};

const UpdateProduct = (data) =>{
    return axios.put(`/product-dto/updateProduct/${data.id}`,data)
}
export default {
  findAll,
  JoinAll,
  Create,
  GetbyId,
  UpdatedUserandCust,
  DeleteUserAndCust,
  GetAllProduct,
  CreateProduct,
  DeleteProduct,
  UpdateProduct
};
