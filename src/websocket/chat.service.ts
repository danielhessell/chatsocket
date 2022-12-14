import { container } from "tsyringe";
import { io } from "../http";
import { CreateChatRoomService } from "../services/create-chat-room.service";
import { CreateMessageService } from "../services/create-message.service";
import { CreateUserService } from "../services/create-user.service";
import { GetAllUsersService } from "../services/get-all-users.service";
import { GetChatRoomByIdService } from "../services/get-chat-room-by-id.service";
import { GetChatRoomByUsersService } from "../services/get-chat-room-by-users.service";
import { GetMessagesByChatRoomService } from "../services/get-messages-by-chat-room.service";
import { GetUserBySocketIdService } from "../services/get-user-by-socket-id.service";
import { User } from "../schemas/user";

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

    /**
     * Quando queremos enviar mensagens/eventos para todos usuários, menos
     * para o usuário logado/do socket, nós utilizamos o broadcast
     */
    socket.broadcast.emit("new_users", user);
  });

  /**
   * Para retornar valores em u evento com socket, utilizamos o callback
   * Exemplo: callback(result)
   */
  socket.on("get_users", async (callback) => {
    const getAllUsersService = container.resolve(GetAllUsersService);
    const users = await getAllUsersService.execute();

    callback(users);
  });

  socket.on("start_chat", async (data, callback) => {
    const createChatRoomService = container.resolve(CreateChatRoomService);
    const getUserBySocketIdService = container.resolve(
      GetUserBySocketIdService
    );
    const getChatRoomByUsersService = container.resolve(
      GetChatRoomByUsersService
    );
    const getMessagesByChatRoomService = container.resolve(
      GetMessagesByChatRoomService
    );

    const userLogged = await getUserBySocketIdService.execute({
      socket_id: socket.id,
    });

    let room = await getChatRoomByUsersService.execute({
      users_id: [data.idUser, userLogged._id],
    });

    if (!room) {
      room = await createChatRoomService.execute({
        users_id: [data.idUser, userLogged._id],
      });
    }

    const messages = await getMessagesByChatRoomService.execute({
      room_id: room.chat_room_id,
    });

    /**
     * Para unir os usuários em uma sala.
     */
    socket.join(room.chat_room_id);
    callback({ room, messages });
  });

  socket.on("message", async (data) => {
    const getUserBySocketIdService = container.resolve(
      GetUserBySocketIdService
    );
    const createMessageService = container.resolve(CreateMessageService);
    const getChatRoomByIdService = container.resolve(GetChatRoomByIdService);

    const user = await getUserBySocketIdService.execute({
      socket_id: socket.id,
    });

    const message = await createMessageService.execute({
      to: user._id,
      text: data.message,
      room_id: data.chat_room_id,
    });

    /**
     * Para enviar a mensagem para os demais usuários da conexão.
     */
    io.to(data.chat_room_id).emit("message", {
      message,
      user,
    });

    /**
     * Para enviar notificação de nova mensagem ao usuário
     */
    const room = await getChatRoomByIdService.execute({
      chat_room_id: data.chat_room_id,
    });

    const userFrom = room.users.find((u) => String(u._id) !== String(user._id));

    io.to(userFrom.socket_id).emit("notification", {
      newMessage: true,
      room_id: data.chat_room_id,
      from: user,
    });
  });
});
