export interface User {
    id: number;
    username: string;
    password: string;
    roles: { id: number; name: string; }[];
}
