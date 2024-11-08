import { mysqlDatabase } from "../../../../common";
import { UserRepository } from "../../../application/contracts/repository/user-repository";
import { User } from "../../../domain/entity/user";

export class UserMysqlRepository implements UserRepository {
  async create(user: User): Promise<void> {
    const sql = `INSERT INTO user`;
    await mysqlDatabase.query(sql);
  }

  getByEmail(email: string): Promise<User | undefined> {
    throw new Error("Method not implemented");
  }

  getById(id: string): Promise<User> {
    throw new Error("Method not implemented");
  }
}
