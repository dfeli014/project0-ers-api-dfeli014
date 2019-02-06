import { Reimbursement, FullyJoinedReimbursement } from '../models/Reimbursement';
import { connectionPool } from '../util/connection-util';
import { reimbursementConverter, fullyJoinedReimbursementConverter } from '../util/reimbursementConverter';
import { SqlFullyJoinedReimbursement } from '../dto/SqlReimbursement';

/**
 * Retrieve Reimbursements by the statusId given in URL
 */
export async function findReimbursementsById(id: number): Promise<Reimbursement[]> {
    const client = await connectionPool.connect();
    const reimbursements = [];
    const statusId = id;
    try {
        const reimburseResults = await client.query(`SELECT * FROM project0.reimbursement r
        LEFT JOIN project0.reimbursement_status rs ON r.status = rs.statusid
        LEFT JOIN project0.reimbursement_type rt ON r.type = rt.typeid
        LEFT JOIN project0.user u ON r.author = u.userid AND r.resolver = u.userid
         WHERE r.status = $1 ORDER BY r.datesubmitted ASC`, [statusId]);

        reimburseResults.rows.forEach((newUser) => {
            const date1 = new Date(reimburseResults.rows[0].datesubmitted);
            const date2 = new Date(reimburseResults.rows[0].dateresolved);
            newUser.dateSubmitted = date1.toString();
            newUser.dateResolved = date2.toString();
            const user = reimbursementConverter(newUser);
            reimbursements.push(user);
        });
        return reimbursements;
    } finally {
        client.release();
    }
}

/**
 * Retrieve all reimbursements by the userId given in the URL
 */
export async function findReimbursementsByUser(id: number): Promise<Reimbursement[]> {
    const client = await connectionPool.connect();
    const reimbursements = [];
    const userId = id;

    try {
        const results = await client.query(`SELECT * FROM project0.reimbursement r
        LEFT JOIN project0.reimbursement_type rt ON r.type = rt.typeid
        LEFT JOIN project0.reimbursement_status rs ON r.status = rs.statusid WHERE
        r.author=$1`, [userId]);

        results.rows.forEach((newUser) => {
            const date1 = new Date(results.rows[0].datesubmitted);
            const date2 = new Date(results.rows[0].dateresolved);
            newUser.dateSubmitted = date1.toString();
            newUser.dateResolved = date2.toString();
            const user = reimbursementConverter(newUser);
            reimbursements.push(user);
        });
        return reimbursements;
    } finally {
        client.release();
    }
}

/**
 * Submit a reimbursement
 */
export async function submitReimbursement(req): Promise<Reimbursement> {
    const client = await connectionPool.connect();

    const author = req.author;
    const amount = req.amount;
    const dateSubmitted = req.dateSubmitted;
    const dateResolved = req.dateResolved;
    const description = req.description;
    const resolver = req.resolver;
    const status = req.status;
    const type = req.type;

    try {
        const result = await client.query(`INSERT INTO project0.reimbursement (author, amount, dateSubmitted,
            dateResolved, description, resolver, status, type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *`,
            [author, amount, dateSubmitted, dateResolved, description, resolver, status, type]);
        const reimburse = reimbursementConverter(result.rows[0]);
        return reimburse;
    } finally {
        client.release();
    }
}

/**
 * Update a reimbursement
 */
export async function updateReimbursement(req): Promise<Reimbursement> {
    const client = await connectionPool.connect();
    const oldReimburse = await findReimbursementByReimbursementId(req.reimbursementId);

    const reimburseId = req.reimbursementId || oldReimburse.reimbursementId;
    const author = req.author || oldReimburse.author;
    const amount = req.amount || oldReimburse.amount;
    const dateSubmitted = req.dateSubmitted || oldReimburse.dateSubmitted;
    const dateResolved = req.dateResolved || oldReimburse.dateResolved;
    const description = req.description || oldReimburse.description;
    const resolver = req.resolver || oldReimburse.resolver;
    const status = req.status || oldReimburse.status;
    const type = req.type || oldReimburse.type;

    try {
        const result = await client.query(`UPDATE project0.reimbursement SET author=$1, amount=$2,
        datesubmitted=$3, dateresolved=$4, description=$5, resolver=$6, status=$7, "type"=$8 WHERE reimbursementid=$9
        returning *`, [author, amount, dateSubmitted, dateResolved, description, resolver, status, type, reimburseId]);

        const date1 = new Date(result.rows[0].dateSubmitted);
        const date2 = new Date(result.rows[0].dateResolved);
        result.rows[0].dateSubmitted = date1.toString();
        result.rows[0].dateResolved = date2.toString();
        const reimburse = reimbursementConverter(result.rows[0]);
        return reimburse;
    } finally {
        client.release();
    }
}

/**
 * Find all reimbursements
 */
export async function findAllReimbursements(): Promise<FullyJoinedReimbursement[]> {
    const client = await connectionPool.connect();
    const list = [];

    try {
        const allReimbursements = await client.query(`select * from project0.reimbursement r 
        left join project0."user" u on r.author = u.userid 
        left join project0.role rl on u."role" = rl.roleid 
        left join project0.reimbursement_status rs on rs.statusid = r.status 
        left join project0.reimbursement_type rt on rt.typeid = r."type" order by r.reimbursementid asc;`);

        allReimbursements.rows.forEach((element) => {
            const reimburse = fullyJoinedReimbursementConverter(element);
            list.push(reimburse);
        });
        return list;
    } finally {
        client.release();
    }
}

/**
 *
 * @param id Find a reimbursement by the reimbursementId
 */
export async function findReimbursementByReimbursementId(id: number) {
    const client = await connectionPool.connect();

    try {
        const reimburse = await client.query(`SELECT * FROM project0.reimbursement WHERE reimbursementid=$1`, [id]);
        const date1 = new Date(reimburse.rows[0].datesubmitted);
        const date2 = new Date(reimburse.rows[0].dateresolved);
        reimburse.rows[0].dateSubmitted = date1.toString();
        reimburse.rows[0].dateResolved = date2.toString();
        const res = reimbursementConverter(reimburse.rows[0]);
        return res;
    } finally {
        client.release();
    }
}