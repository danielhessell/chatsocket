import { randomUUID } from "crypto";
import mongoose, { Document, Schema } from "mongoose";

type ChatRoom = Document & {
  users_id: objectId[];
  chat_room_id: String;
};

const ChatRoomSchema = new Schema(
  {
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    chat_room_id: {
      type: String,
      default: randomUUID({}),
    },
  },
  { versionKey: false }
);

export const ChatRoom = mongoose.model<ChatRoom>("ChatRoom", ChatRoomSchema);