import { container } from "tsyringe";
import { io } from "../http";
import { CreateUserService } from "../services/create-user.service";

type UserParams = {
  name: string;
  email: string;
  avatar: string;
};

io.on("connect", (socket) => {
  /**
   * io.emit() vs socket.emit()
   * Quando utilizamos o io, estaremos enviando uma informação global
   * para todos os usuários da aplicação.
   * Quando utilizamos o socket, é possível ter um controle de qual cliente
   * queremos enviar, trabalhando assim com informações mais restritas.
   *
   *  socket.emit("chat-started", {
   *    message: "Your chat has been started.",
   *  });
   */

  socket.on("start", async ({ name, email, avatar }: UserParams) => {
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      avatar,
      socket_id: socket.id,
    });

    console.log(user);
  });
});
