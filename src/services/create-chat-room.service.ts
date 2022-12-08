import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/chat-room";

interface CreateChatRoomDto {
  users_id: string[];
}

@injectable()
export class CreateChatRoomService {
  async execute({ users_id }: CreateChatRoomDto) {
    return ChatRoom.create({
      users: users_id,
    });
  }
}
