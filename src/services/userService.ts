import axios from 'axios';
import { User } from 'types/User';
axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const userService = {

    postUser: async (newUser: User)=>{
        try{
            const req = await axios.post("/users/create", newUser);
            return req;
        }catch(err){
            alert(err);
        }
    }


}