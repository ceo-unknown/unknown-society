import mongoose from "mongoose";

const userModelSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  eToken: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userModelSchema) || mongoose.models.user;
export default User;
