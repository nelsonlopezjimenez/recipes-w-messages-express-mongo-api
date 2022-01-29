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

