import mongoose, { Document, Schema } from "mongoose";

type User = Document & {
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
};

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    socket_id: String,
  },
  { versionKey: false }
);

export const User = mongoose.model<User>("User", UserSchema);
