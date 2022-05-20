import mongoose from "mongoose";
import User from '../../../Lib/Models/User'

export default async function handler(req,res){

//get mongoDb client and connect to db

    mongoose.connect(process.env.MONGODB_URI)
    const connection = mongoose.connection;

    const filter = {id: req.query.id};
    //get users from db and return json of all users
    try{
    const singleUser = await User.find(filter).orFail(()=>{
       return res.status(404).json(`user with id: ${filter} not found`)
        });
    }
    catch (error){
    return res.status(500).json(error);
    }
    return res.status(201).json(singleUser);
};