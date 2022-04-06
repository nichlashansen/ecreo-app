import mongoose from "mongoose";
import { useRouter } from "next/router";
import AbsenseModel from "../../../Lib/absenseModel";
import { getSession } from "next-auth/react";

export default async function handler(req, res){
   mongoose.connect(process.env.MONGODB_URI)
   const connection = mongoose.connection;

const session = await getSession({req});
const id = session.user.id;

 const absense = await AbsenseModel.create({
    userId: id,
    absenseReason: req.body.absenseReason,
    absenseDate: req.body.absenseDate,
    absenseStartTime: req.body.absenseStartTime,
    absenseEndTime: req.body.absenseEndTime,
    absenseComment: req.body.absenseComment
 });

 absense.save();
   return res.status(201).json(absense);
}