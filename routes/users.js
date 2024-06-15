
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    dp: { type: String },
    email: { type: String, required: true },
    fullname: { type: String },
});

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema); 
