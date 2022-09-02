import { Institution } from "types/Institution";
import api from './Api';
import swall from "sweetalert";


export const institutionService = {
  postInstitution: async (newInstitution: Institution) => {
    try {
      const req = await api.post("/institutions",{
        name: newInstitution.name,
        phone: newInstitution.phone,
        cep: newInstitution.cep,
        adressNumber: newInstitution.adressNumber,
        street: newInstitution.street,
        district: newInstitution.district,
        city: newInstitution.city,
        state: newInstitution.state,
        complement: newInstitution.complement,
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
  UpInstitution: async (InstitutionId: string, Institution: Institution) => {
    try {
      const req = await api.patch(`/institutions/${InstitutionId}`, {
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
    } catch (err) {
      swall({
        title: "Erro",
        text: "Os campos não estão corretos!",
        icon: "error",
        timer: 3000,
      })
    }
  },

  allInstitution: async (pageNumber: number) => {
    try {
      const req = api.get(`/institutions/find-all?page=${pageNumber}`);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Erro na chamada das Instituições",
        icon: "error",
        timer: 3000,
      })
    }
  },
  allInstitutionNoPaged: async ()=>{
    try{
      const req = api.get(`institutions/find-all-no-paged`);
      return req;
    }catch(err){
      alert(err)
    }
  },
  oneInstitution: async (id: string) => {
    try {
      const req = api.get(`/institutions/${id}`);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Erro na chamada da Instituição",
        icon: "error",
        timer: 3000,
      })
    }
  },
  deletInstitution: async (id: string)=>{
    try{
      const req = api.delete(`/institutions/${id}`)
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível deletar a instituição",
        icon: "error",
        timer: 3000,
      });
    }
  }
};
