import { io } from "../http";

io.on("connect", (socket) => {
  /**
   * io.emit() vs socket.emit()
   * Quando utilizamos o io, estaremos enviando uma informação global
   * para todos os usuários da aplicação.
   * Quando utilizamos o socket, é possível ter um controle de qual cliente
   * queremos enviar, trabalhando assim com informações mais restritas.
   */
  socket.emit("chat-started", {
    message: "Your chat has been started.",
  });
});
