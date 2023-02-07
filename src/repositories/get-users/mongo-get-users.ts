import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Fabrício",
        lastName: "Caldana",
        email: "fabricio@gmail.com",
        password: "123456",
      },
    ];
  }
}
