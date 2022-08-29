import axios from "axios";
import { User } from "types/User";
import api from "./Api";
axios.defaults.baseURL = "https://colunareta-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
interface NewUser {
  id?: string;
  name: string;
  email?: string;
  password: string;
  confirmPassword: string;
}
export const userService = {
  postUser: async (newUser: User) => {
    try {
      const req = await axios.post("/users/create", newUser);
      return req;
    } catch (err) {
      alert(err);
    }
  },
  createUser: async (userId:string, newUser:NewUser)=>{
    try{
      const req = await axios.patch(`/users/email/${userId}`,{
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword,
      })
      return req;
    }catch(err){
      alert(err)
    }
  }
};

export const userApiService = {
  allUsers: async (pageNumber:number) => {
    try {
      const req = api.get(`/users/find-all?page=${pageNumber}`);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  oneUser: async (id:string) =>{
    try{
        const req = api.get(`/users/${id}`);
        return req;
    }catch(err){
        alert(err)
    }
  },
  UpUser: async (userId: string, User: User)=>{
    try{
      const req = await api.patch(`/users/${userId}`,{
        name: User.name,
        email: User.email,
        role: User.role
      });
      return req;
    }catch(err){
      alert(err)
    }
  }
};
