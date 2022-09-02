import { FormStudents } from "../../src/types/FormStudent";
import api from './Api';
import swall from 'sweetalert'

export const studentService = {
  postStudent: async (newStudent: FormStudents) => {
    try {
        const req = await api.post('/student',{
            name: newStudent.name,
            age: newStudent.age,
            phone: newStudent.phone,
            institutionId: newStudent.institutionId
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
  UpStudent: async (studentId: string, Student: FormStudents)=>{
    try{
        const req = await api.patch(`/student/${studentId}`,{
            name: Student.name,
            age: Student.age,
            phone: Student.phone,
            institutionId: Student.institutionId 
          
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
  oneStudent: async (id: string)=>{
    try{
        const req = api.get(`/student/${id}`);
        return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível encontrar o aluno",
        icon: "error",
        timer: 3000,
      });
    }
  },
  allStudent: async (pageNumber:number)=>{
    try{
      const req = api.get(`/student/find-all?page=${pageNumber}`);
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível encontrar os alunos",
        icon: "error",
        timer: 3000,
      });
    }
  },

  allStudentFilterInst: async (pageNumber: number, idInst: string)=>{
    try{
      const req = api.get(`/student/find-all-filter?page=${pageNumber}&search=${idInst}`)
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível filtrar os alunos",
        icon: "error",
        timer: 3000,
      });
    }
  },

  deleteStudent: async (id: string) =>{
    try{
      const req = api.delete(`/student/${id}`);
      return req;
    }catch(err){
      swall({
        title: "Erro",
        text: "Não foi possível deletar o aluno",
        icon: "error",
        timer: 3000,
      });
    }
  }
};
