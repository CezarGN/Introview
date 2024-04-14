import { User } from "./usermock.model";

export interface ClientModel
{   id: number;
    user: User;
    scoreList: any[]; // You might want to replace 'any' with a specific type
    interviewList: any[];
}