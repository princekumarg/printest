const mongoose = require("mongoose");
const { stringify } = require("querystring");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const postSchema = mongoose.Schema({
    imageText: { type: String },
    image: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Array, default: [] },
});

module.exports = mongoose.model("Post", postSchema);