const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema (
    {
        adminid: {
            type: String, 
            required: true, 
            minLength: 2,
            maxlength: 30,
            unique: true
        },
        password: {type:String, required: true, minlength: 3,maxlength: 1024},
    },
    {
        timestamps: true,
// This property tells Mongoose to automatically add two timestamps to each user document:
// createdAt: A timestamp representing the time the document was created in the database.
// updatedAt: A timestamp representing the time the document was last updated in the database.
    }
);

const adminModel = mongoose.model("adminAccount", adminSchema);
module.exports = adminModel;