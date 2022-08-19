export type StudentComplete ={
    id?:string;
    name: string;
    age: string;
    phone: string;
    consult?:[
        hour:string,
        schedule:string,
    ];
    institution:{
        name: string;
    }
}