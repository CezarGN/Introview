import { ClientModel } from "./client.model";
import { Interviewer } from "./interviewer.model";
import { UserModel } from "./user.model";

export interface InterviewModel{
    client: ClientModel;
    interviewer: Interviewer;
    description: string;
    date: string;
}