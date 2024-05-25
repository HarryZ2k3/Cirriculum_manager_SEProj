const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema (
    {
        studentid: {
            type: String, 
            required: true, 
            minLength: 5,
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

const accountModel = mongoose.model("Account", accountSchema);
module.exports = accountModel;