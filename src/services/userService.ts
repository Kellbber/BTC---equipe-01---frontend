import axios from "axios";
import { User } from "types/User";
import api from "./Api";
import swall from 'sweetalert'
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
      swall({
        title: "Erro",
        text: "Os campos não estão corretos!",
        icon: "error",
        timer: 3000,
      });
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
      swall({
        title: "Erro",
        text: "Os campos não estão corretos!",
        icon: "error",
        timer: 3000,
      });
    }
  }
};

export const userApiService = {
  allUsers: async (pageNumber:number) => {
    try {
      const req = api.get(`/users/find-all?page=${pageNumber}`);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Não foi possível encontrar os usuários",
        icon: "error",
        timer: 3000,
      });
    }
  },

  oneUser: async (id:string) =>{
    try{
        const req = axios.get(`/users/find-one/${id}`);
        return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível encontrar o usuário",
        icon: "error",
        timer: 3000,
      });
    }
  },
  oneUserEmail: async(id:string)=>{
    try{
      const req = axios.get(`/users/find-one/${id}`);
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível encontrar o usuário",
        icon: "error",
        timer: 3000,
      });
    }
  },
  UpUser: async (userId: string, User: User)=>{
    try{
      const req = await api.patch(`/users/${userId}`,{
        name: User.name,
        email: User.email,
        role: User.role,
        password: User.password,
        confirmPassword: User.confirmPassword,
      });
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível atualizar o usuário",
        icon: "error",
        timer: 3000,
      });
    }
  },

  DeleteUser: async (id:string) => {
    try{
      const req = api.delete(`/users/${id}`)
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível deletar o usuário",
        icon: "error",
        timer: 3000,
      });
    }
  }
};
