import express from 'express';
import * as ReimbursementDao from '../dao/reimbursement-dao';
import { managerMiddleware, userIdMiddleware } from '../middleware/auth.middleware';

// All routes defined with this object will assume /reimbursements
export const reimbursementRouter = express.Router();

/**
 * Find all reimbursements by statusId
 */
reimbursementRouter.get('/status/:statusId', [managerMiddleware, async (req, res) => {
    const id = +req.params.statusId;
    try {
        const reimburses = await ReimbursementDao.findReimbursementsById(id);
        res.json(reimburses);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);

/**
 * Find a reimbursement by userId
 */
reimbursementRouter.get('/author/userId/:userId', [userIdMiddleware, async (req, res) => {
    try {
        const reims = await ReimbursementDao.findReimbursementsByUser(+req.params.userId);
        res.json(reims);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);

/**
 * Submit a reimbursement
 */
reimbursementRouter.post('', async (req, res) => {
    try {
        const sub = await ReimbursementDao.submitReimbursement(req.body);
        res.status(201).json(sub);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

/**
 * Update a reimbursement
 */
reimbursementRouter.patch('', [managerMiddleware, async (req, res) => {
    try {
        const upd = await ReimbursementDao.updateReimbursement(req.body);
        res.json(upd);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);