import mysqlDatabase from "../../../../common/infra/mysql/mysql-database";
import { UserRepository } from "../../../application/contracts/repository/user-repository";
import { User } from "../../../domain/entity/user";
import { UserNotFoundError } from "../../../error/user-not-found-error";

export class UserMysqlRepository implements UserRepository {
  private buildUserFromData(data: any) {
    return User.build({
      id: data.id,
      email: data.email,
      name: data.name,
      hashPassword: data.password_hash,
      salt: data.password_salt,
    });
  }

  async create(user: User): Promise<void> {
    const sql = `INSERT INTO user (id, name, email, password_hash, password_salt) VALUES (?,?,?,?,?)`;
    await mysqlDatabase.query({
      sql,
      values: [
        user.getId(),
        user.getName(),
        user.getEmail(),
        user.getPasswordHash(),
        user.getPasswordSalt(),
      ],
    });
  }

  async getByEmail(email: string): Promise<User | undefined> {
    const sql =
      "SELECT id, name, email, password_hash, password_salt FROM user WHERE email = ?";
    const [data] = await mysqlDatabase.query({ sql, values: [email] });
    if (!data) return undefined;
    return this.buildUserFromData(data);
  }

  async getById(id: string): Promise<User> {
    const sql =
      "SELECT id, name, email, password_hash, password_salt FROM user WHERE id = ?";
    const [data] = await mysqlDatabase.query({ sql, values: [id] });
    if (!data) throw new UserNotFoundError();
    return this.buildUserFromData(data);
  }
}
