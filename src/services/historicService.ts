import api from './Api'

export const historicService = {
    findOne: async (id: string)=>{
        try{
            const req = api.get(`/followUps/${id}`);
            return req;
        }catch(err){
            alert(err)
        }
    },
    deleteHistoric: async (id: string)=>{
        try{
         const req = api.delete(`/followUps/${id}`);
         return req;
        }catch(err){
            alert(err)
        }
    },

    upHistoric: async (id:string)=>{
        try{
            const req = api.patch(`/followUps/${id}`)
            return req;
        }catch(err){
            alert(err)
        }
    }
}