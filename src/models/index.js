import mongoose from 'mongoose';
import Recipe from './recipe';
import User from './user';
import Message from './message';

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/lopeznelson')
};

const models = { Recipe, User, Message };

export { connectDb };

export default models;

// var mongoose = require('mongoose');
// mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/lopeznelson');

// mongoose.Promise = Promise;

// module.exports.Recipe = require("./recipe");
