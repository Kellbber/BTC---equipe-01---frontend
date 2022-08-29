import axios from 'axios';

const api = axios.create({
    baseURL: "https://colunareta-backend.herokuapp.com/",
});

api.interceptors.request.use((config:any)=>{
try{
    const token = localStorage.getItem("jwt");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}catch(error){
    alert(error)
}
})
export default api;