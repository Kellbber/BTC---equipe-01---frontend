import api from "./Api";

interface Historic {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  forwarding: string[];
  studentId?: string;
}

export const historicService = {
    postHistoric: async (newHistoric: Historic)=>{
        try{
            const req = await api.post(`/followUps`,{
                startDate: newHistoric.startDate,
                firstPhoto: newHistoric.firstPhoto,
                secondPhoto: newHistoric.secondPhoto,
                returnDate: newHistoric.returnDate,
                note: newHistoric.note,
                forwarding: newHistoric.forwarding,
             
            })
            return req;
        }catch(err){
            alert(err)
        }
    },

  findOne: async (id: string) => {
    try {
      const req = api.get(`/followUps/${id}`);
      return req;
    } catch (err) {
      alert(err);
    }
  },
  deleteHistoric: async (id: string) => {
    try {
      const req = api.delete(`/followUps/${id}`);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  upHistoric: async (id: string, historic: Historic) => {
    try {
      const req = api.patch(`/followUps/${id}`, {
        startDate: historic.startDate,
        firstPhoto: historic.firstPhoto,
        secondPhoto: historic.secondPhoto,
        returnDate: historic.returnDate,
        note: historic.note,
        forwarding: historic.forwarding,
    
      });
      return req;
    } catch (err) {
      alert(err);
    }
  },
};
