import { injectable } from "tsyringe";
import { User } from "../schemas/user";

interface GetUserBySocketIdDto {
  socket_id: string;
}

@injectable()
export class GetUserBySocketIdService {
  async execute({ socket_id }: GetUserBySocketIdDto) {
    return User.findOne({ socket_id });
  }
}
