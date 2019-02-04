import { SqlRole } from '../dto/SqlRole';
import { Role } from '../models/Role';

export function roleConverter(role: SqlRole) {
    return new Role(role.roleid, role.role);
}