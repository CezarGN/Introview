import { User } from "./usermock.model";

export interface Interviewer {
    id: number;
    user: User;
    domain: string;
    interviewList: any[]; // You might want to replace 'any' with a specific type
}