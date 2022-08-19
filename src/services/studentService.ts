import axios from "axios";
import {FormStudents } from "../../src/types/FormStudent";

axios.defaults.baseURL = "http://localhost:3333/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const studentService = {
  postStudent: async (newStudent: FormStudents) => {
    try {
        const req = await axios.post('/student',{
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
        const req = await axios.patch(`/student/${studentId}`,{
            name: Student.name,
            age: Student.age,
            phone: Student.phone,
            institutionId: Student.institutionId 
        })
    }catch(err){
        alert(err)
    }
  },
  oneStudent: async (id: string)=>{
    try{
        const req = axios.get(`/student/${id}`);
        return req;
    }catch(err){
        alert(err)
    }
  }
};
