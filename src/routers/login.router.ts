import express from 'express';
import * as UserDao from '../dao/user-dao';

// This object will handle login verification
export const loginRouter = express.Router();

/**
 * Login Routing
 */
loginRouter.post('', async (req, res) => {
    try {
        const user = await UserDao.findByUsernameAndPassword(req.body.username,
            req.body.password);

        if (user) {
            req.session.user = user;
            res.json(user);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json('Invalid Credentials');
    }
});