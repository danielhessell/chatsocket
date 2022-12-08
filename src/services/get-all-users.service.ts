import { injectable } from "tsyringe";
import { User } from "../schemas/user";

@injectable()
export class GetAllUsersService {
  async execute() {
    return User.find();
  }
}
