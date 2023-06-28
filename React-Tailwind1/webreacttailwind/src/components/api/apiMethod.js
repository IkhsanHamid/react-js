import axios from "../config/endpoint";

const findAll = () => {
  return axios.get("/user-dto/Alluser");
};

const JoinAll = () =>{
    return axios.get("/user/JoinCustUs")
}

const Create =(data)=>{
    return axios.post("/user-dto/InsertUser",data)
}

const GetbyId = (id)=>{
    return axios.get(`/user-dto/findOneUser/${id}`)
}

const UpdatedUserandCust = (data) =>{
    return axios.put(`/user-dto/updateUser/${data.user_id}`, data)
}

const DeleteUserAndCust = (id) =>{
    // console.log(id);
    return axios.delete(`/user-dto/deleteUser/${id}`)
}
export default { findAll, JoinAll, Create, GetbyId, UpdatedUserandCust, DeleteUserAndCust};
