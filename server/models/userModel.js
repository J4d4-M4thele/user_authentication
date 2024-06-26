const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {},
    username: {},
    password: {},
    createdAt: {}
});