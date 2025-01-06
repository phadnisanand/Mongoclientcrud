const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
// router.get('/users/:name', userController.getUserById);
router.put('/users/:id', userController.updateUser);
//router.put('/users/:name', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
