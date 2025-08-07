// models/characterModel.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        level: {
            type: Number,
            required: true,
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // createdAt, updatedAt 자동 생성
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
