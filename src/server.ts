import "reflect-metadata";

import { server } from "./http";
import "./websocket/chat.service";

server.listen(8080, () => console.log("🚀 Server running on port 8080."));
