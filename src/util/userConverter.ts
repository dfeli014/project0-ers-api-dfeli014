import { User } from '../models/User';
import { SqlUser } from '../dto/SqlUser';
import { Role } from '../models/Role';

export function userConverter(user: SqlUser) {
    return new User(user.userid, user.username, user.password, user.firstname, user.lastname,
        user.email, user.roleid, user.role);
}