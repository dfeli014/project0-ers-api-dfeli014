import { Role } from '../models/Role';

export class SqlUser {
    userid = 0;
    username = '';
    password = '';
    firstname = '';
    lastname = '';
    email = '';
    role = new Role;
}