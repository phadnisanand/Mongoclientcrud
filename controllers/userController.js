const { getUsersCollection } = require('../models/userModel');
var mongo = require('mongodb');
const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const result = await getUsersCollection().insertOne(req.body);

    console.log(result)
    res.status(201).send(result);
  } catch (err) {
    res.send(err)
    res.status(500).send({ error: 'Failed to create user' });
  }
};

// Read All
const getAllUsers = async (req, res) => {
  try {
    const users = await getUsersCollection().find({}).toArray();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch users' });
  }
};

// Read One
const getUserById = async (req, res) => {

  try {
    var o_id = new mongo.ObjectId(req.params.id);
    const user = await getUsersCollection().findOne(
      { _id: o_id });
    if (!user) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch user' });
  }
};

// Update
const updateUser = async (req, res) => {
  try {
    var o_id = new mongo.ObjectId(req.params.id);
    const result = await getUsersCollection().updateOne(
      { _id: o_id },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.status(200).send({ message: 'User updated successfully' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to update user' });
  }
};

// Delete
const deleteUser = async (req, res) => {
  try {
    var o_id = new mongo.ObjectId(req.params.id);
    const result = await getUsersCollection().deleteOne({ _id: o_id });
    if (result.deletedCount === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.status(200).send({ message: 'User deleted successfully' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete user' });
  }
};

module.exports = { createUser,
                    getAllUsers,
                    getUserById,
                    updateUser,
                    deleteUser
                };
