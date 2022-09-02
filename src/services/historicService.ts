import api from "./Api";
import swall from 'sweetalert'
interface Historic {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  raiox?:boolean;
  fisioterapia?:boolean;
  colete?:boolean;
  cirurgia?:boolean;
  angulocob?:boolean;
  studentId: string;
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
                raiox: newHistoric.raiox,
                fisioterapia: newHistoric.fisioterapia,
                colete: newHistoric.colete,
                cirurgia: newHistoric.cirurgia,
                angulocob: newHistoric.angulocob,
                studentId: newHistoric.studentId,
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
    },

  findOne: async (id: string) => {
    try {
      const req = api.get(`/followUps/${id}`);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Não foi possível encontrar o histórico",
        icon: "error",
        timer: 3000,
      });
    }
  },
  deleteHistoric: async (id: string) => {
    try {
      const req = api.delete(`/followUps/${id}`);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Não foi possível deletar o histórico",
        icon: "error",
        timer: 3000,
      });
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
        raiox: historic.raiox,
        fisioterapia: historic.fisioterapia,
        colete: historic.colete,
        cirurgia: historic.cirurgia,
        angulocob: historic.angulocob,
      });
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
};
