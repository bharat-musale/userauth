import express from 'express';
import * as userController from '../controllers/user.controller';
import { signInRegistration } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('/login', userController.loginUser);

// //route to create a new user
router.post('',signInRegistration, userController.registrationUser);

// //route to get a single user by their user id
// router.get('/:_id', userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;