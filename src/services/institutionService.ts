import axios from 'axios';
import { Institution } from 'types/Institution';

axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const institutionService = {

    postInstitution: async (newInstitution: Institution)=>{
        try{
            const req = await axios.post("/institutions", newInstitution);
            return req;
        }catch(err){
            alert(err);
        }

    },
    UpInstitution: async (InstitutionId: string, Institution: Institution)=>{
        try{
            const req = await axios.patch(`/institutions/${InstitutionId}`,{
                name: Institution.name,
                phone: Institution.phone,
                cep: Institution.cep,
                adressNumber: Institution.adressNumber,
                street: Institution.street,
                district: Institution.district,
                city: Institution.city,
                state: Institution.state,
                complement: Institution.complement,
            });
            return req;
        }catch(err){
            alert(err)
        }
    },
    
    allInstitution: async () =>{
        try{
            const req = axios.get('/institutions/find-all')
            return req;
        }catch(err){
            alert(err)
        }
    },
    oneInstitution: async (id:string)=>{
        try{
            const req = axios.get(`/institutions/${id}`)
            return req;
        }catch(err){
            alert(err)
        }
    }
    }
