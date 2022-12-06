import { injectable } from "tsyringe";
import { Message } from "../schemas/message";

interface CreateMessageDto {
  to: string;
  text: string;
  room_id: string;
}

@injectable()
export class CreateMessageService {
  async execute({ to, text, room_id }: CreateMessageDto) {
    return Message.create({
      to,
      text,
      room_id,
    });
  }
}
