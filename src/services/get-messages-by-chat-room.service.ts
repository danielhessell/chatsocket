import { injectable } from "tsyringe";
import { Message } from "../schemas/message";

interface GetMessagesByChatRoomDto {
  room_id: string;
}

@injectable()
export class GetMessagesByChatRoomService {
  async execute({ room_id }: GetMessagesByChatRoomDto) {
    return Message.find({ room_id }).populate("to");
  }
}
