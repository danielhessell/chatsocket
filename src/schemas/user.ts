import mongoose, { Document, Schema } from "mongoose";

export type User = Document & {
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
};

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PeYVK0G3wYyUbYfLZkbL3KWBVPPYe5WQPg&usqp=CAU",
    },
    socket_id: String,
  },
  { versionKey: false }
);

export const User = mongoose.model<User>("User", UserSchema);
