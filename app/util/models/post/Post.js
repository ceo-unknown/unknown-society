import mongoose from "mongoose";

const postModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desorption: {
      type: String,
    },
    tags: [{ type: String }],
    imageUrl: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.models.posts || mongoose.model("Post", postModelSchema);

export default Post;
