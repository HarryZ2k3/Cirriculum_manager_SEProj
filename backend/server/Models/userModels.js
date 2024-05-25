const mongoose = require("mongoose");
const userSchema = new mongoose.Schema (
    {
        name: {type: String, required: true,minlength: 3, maxlength: 30},
        email:{
            type: String,
            required: true, 
            minlength : 3,
            maxlength : 200,
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

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;