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

let User;
if (mongoose.models.User) {
  User = mongoose.models.User;
} else {
  User = mongoose.model("User", userModelSchema);
}
export default User;
