import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/chat-room";

interface GetChatRoomByUsersDto {
  users_id: ObjectId[];
}

@injectable()
export class GetChatRoomByUsersService {
  async execute({ users_id }: GetChatRoomByUsersDto) {
    return ChatRoom.findOne({
      users: { $all: users_id },
    });
  }
}
