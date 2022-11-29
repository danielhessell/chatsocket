import { User } from "../schemas/user";
import { injectable } from "tsyringe";

interface CreateUserDto {
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
}

@injectable()
export class CreateUserService {
  async execute({ name, email, avatar, socket_id }: CreateUserDto) {
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      const user = await User.findOneAndUpdate(
        { _id: userAlreadyExists._id },
        {
          $set: {
            socket_id,
            avatar,
            name,
          },
        },
        {
          new: true,
        }
      );

      return user;
    }

    const user = await User.create({
      name,
      email,
      avatar,
      socket_id,
    });

    return user;
  }
}
