import { Role } from '../models/Role';
import { SqlRole } from './SqlRole';

export class SqlUser {
    userid = 0;
    username = '';
    password = '';
    firstname = '';
    lastname = '';
    email = '';
    roleid = 0;
    role = '';
}