import { Reimbursement } from '../models/Reimbursement';
import { connectionPool } from '../util/connection-util';
import { reimbursementConverter } from '../util/reimbursementConverter';

/**
 * Retrieve Reimbursements by the statusId given in URL
 */
export async function findReimbursementsById(id: number): Promise<Reimbursement[]> {
    const client = await connectionPool.connect();
    const reimbursements = [];
    const statusId = id;
    try {
        const reimburseResults = await client.query(`SELECT * FROM project0.reimbursement WHERE
        status = $1`, [statusId]);

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
        const results = await client.query(`SELECT * FROM project0.reimbursement r WHERE
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

    const reimburseId = req.reimbursementId;
    const author = req.author;
    const amount = req.amount;
    const dateSubmitted = req.dateSubmitted;
    const dateResolved = req.dateResolved;
    const description = req.description;
    const resolver = req.resolver;
    const status = req.status;
    const type = req.type;

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