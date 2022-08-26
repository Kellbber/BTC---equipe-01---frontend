export type StudentComplete ={
    id?:string;
    name: string;
    age: string;
    phone: string;
    followUp?:[
      {
        id: string;
        startDate: string;
        firstPhoto: string;
        secondPhoto: string;
        returnDate: string;
        note: string;
        studentId: string;
        forwarding:string[];
      }

    ];
    institution:{
        name: string;
    }
}