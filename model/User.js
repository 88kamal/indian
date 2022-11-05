
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", 'admin', 'root']
   }
});

module.exports =
   mongoose.models.user || mongoose.model('user', UserSchema);