import { Institution } from "types/Institution";
import api from './Api';



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
      alert(err);
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
      alert(err);
    }
  },

  allInstitution: async (pageNumber: number) => {
    try {
      const req = api.get(`/institutions/find-all?page=${pageNumber}`);
      return req;
    } catch (err) {
      alert(err);
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
      alert(err);
    }
  },
};
