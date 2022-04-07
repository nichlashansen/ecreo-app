import { ObjectId } from "mongodb";
import mongoose from "mongoose";

    const Schema = mongoose.Schema;

    const absenseSchema = new Schema({
        userId: String,
        absenseReason: String,
        absenseDate: String,
        absenseStartTime: String,
        absenseEndTime: String,
        absenseComment: String
    })

    module.exports = mongoose.models.Absense || mongoose.model('Absense',absenseSchema);