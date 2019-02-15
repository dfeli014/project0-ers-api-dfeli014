import { Role } from './Role';

export class User {
    userId: number; // primary key
    username: string; // not null, unique
    password: string; // not null
    firstName: string; // not null
    lastName: string; // not null
    email: string; // not null
    roleid: number; // not null
    role: string;

    constructor(id?: number, username?: string, password?: string, firstName?: string, lastName?: string,
        email?: string, roleid?: number, role?: string) {
        this.userId = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roleid = roleid;
        this.role = role;
    }
}