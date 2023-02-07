import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import express from "express";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository);
  const { body, statusCode } = await getUsersController.handle();
  res.status(statusCode).json(body);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
