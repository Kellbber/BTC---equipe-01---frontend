
export type FormStudents = {
    id?:string;
    name: string;
    age: string;
    phone: string;
    institutionId: string;
    institution?:{
        name: string;
    }
}