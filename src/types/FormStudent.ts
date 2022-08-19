import { TriggerConfig } from "react-hook-form";
import { StringLiteral } from "typescript";

export type FormStudents = {
    name: string;
    age: string;
    phone: string;
    institutionId: string;
    institution?:{
        name: string;
    }
}