import mongoose from "mongoose";
import User from '../../../Lib/Models/User'

export default async function handler(req,res){

//get mongoDb client and connect to db

    mongoose.connect(process.env.MONGODB_URI)
    const connection = mongoose.connection;

    //get users from db and return json of all users
    const allUsers = await User.find();

    return res.status(201).json(allUsers);
}