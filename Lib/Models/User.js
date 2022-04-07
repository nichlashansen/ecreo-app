import mongoose from "mongoose";

const schema = mongoose.Schema;
const userModel = new schema({ 
        name: String,
        email: String,
        imagePath: String
});

module.exports = mongoose.models.User || mongoose.model('User',userModel);
