import axios from "axios";
import { User } from "types/User";
axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.post["Content-Type"] = "application/json";
import api from "./Api";

export const userService = {
  postUser: async (newUser: User) => {
    try {
      const req = await axios.post("/users/create", newUser);
      return req;
    } catch (err) {
      alert(err);
    }
  },
};

export const userApiService = {
  allUsers: async () => {
    try {
      const req = api.get("/users/find-all");
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
