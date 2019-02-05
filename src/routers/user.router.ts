import {Request, Response} from 'express';
import express from 'express';
import * as UserDao from '../dao/user-dao';
import { managerMiddleware, adminOnlyMiddleware } from '../middleware/auth.middleware';

// All routes defined with this object will assume /users
export const userRouter = express.Router();

/**
 * Find all users
 */
userRouter.get('', [managerMiddleware, async (req, res) => {
    try {
        const users = await UserDao.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);

/**
 * Find an user by id
 */
userRouter.get('/:id', [managerMiddleware, async (req, res) => {
    const id = +req.params.id;
    try {
        const user = await UserDao.findById(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);

/**
 * Update an user with id given in body
 */
userRouter.patch('', [adminOnlyMiddleware, async (req, res) => {
    try {
        const newUser = await UserDao.updateUserById(req.body);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}]);