import { connectionPool } from '../util/connection-util';
import { User } from '../models/User';
import { userConverter } from '../util/userConverter';
import { roleConverter } from '../util/roleConverter';

/**
 * Retrieve all users from the DB
 */
export async function findAll() {
    const client = await connectionPool.connect();

    try {
        const result = await client.query(`SELECT * FROM project0.user
        LEFT JOIN project0.role ON  project0.user.role = project0.role.roleid`);

        const users = [];
        result.rows.forEach((newUser) => {
            const user = userConverter(newUser);
            users.push(user);
        });
        return users;
    } finally {
        client.release();
    }
}

/**
 * @param id Retrieve a single user by id
 */
export async function findById(id: number): Promise<User> {
    const client = await connectionPool.connect();

    try {
        const res = await client.query( `SELECT * FROM project0.user u where u.userid=$1`, [id]);
        const user = userConverter(res.rows[0]);

        return user;
    } finally {
        client.release();
    }
}

/**
 * Update an user by id, with whatever fields are given
 */
export async function updateUserById(req): Promise<User> {
    if (typeof(req.userId) !== 'number' || req.userId < 0) {
        return undefined;
    } else {
        const user = await findById(req.userId);
        const client = await connectionPool.connect();

        const userid = req.userId || user.userId;
        const username = req.username || user.username;
        const password = req.password || user.password;
        const firstname = req.firstName || user.firstName;
        const lastname = req.lastName || user.lastName;
        const email = req.email || user.email;
        const roleid = req.roleid || user.roleid;
        const role = req.role || user.role;

        try {
            const res = await client.query( `UPDATE project0.user u SET username=$1, password=$2,
            firstname=$3, lastname=$4, email=$5, role=$6 WHERE u.userid=$7 RETURNING *`, [username, password,
                firstname, lastname, email, role, userid]);
            const newUser = userConverter(res.rows[0]);

            return newUser;
        } finally {
            client.release();
        }
    }
}

/**
 * Find an user by username and password
 */
export async function findByUsernameAndPassword(username: string, password: string): Promise<User> {
    const client = await connectionPool.connect();
    try {
        const user = await client.query(`SELECT * FROM project0.user u LEFT JOIN
        project0.role ON project0.role.roleid = u.role WHERE u.username=$1 AND password=$2`,
        [username, password]);

        const newUser = userConverter(user.rows[0]);

        return newUser;
    } finally {
        client.release();
    }
}