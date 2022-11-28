import express from "express";

const server = express();

server.get("/", (_, response) => {
  return response.json({ message: "Hello World!" });
});

server.listen(8080, () => console.log("🚀 Server running on port 8080."));
