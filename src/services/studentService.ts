import { FormStudents } from "../../src/types/FormStudent";
import api from './Api';



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
      alert(err);
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
        alert(err)
    }
  },
  oneStudent: async (id: string)=>{
    try{
        const req = api.get(`/student/${id}`);
        return req;
    }catch(err){
        alert(err)
    }
  },
  allStudent: async (pageNumber:number)=>{
    try{
      const req = api.get(`/student/find-all?page=${pageNumber}`);
      return req;
    }catch(err){
      alert(err)
    }
  },

  allStudentFilterInst: async (pageNumber: number, idInst: string)=>{
    try{
      const req = api.get(`/student/find-all-filter?page=${pageNumber}&search=${idInst}`)
      return req;
    }catch(err){
      alert(err)
    }
  }
};
