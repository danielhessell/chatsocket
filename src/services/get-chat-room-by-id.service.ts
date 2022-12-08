import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/chat-room";

interface GetChatRoomByIdDto {
  chat_room_id: string;
}

@injectable()
export class GetChatRoomByIdService {
  async execute({ chat_room_id }: GetChatRoomByIdDto) {
    return ChatRoom.findOne({ chat_room_id }).populate("users");
  }
}
