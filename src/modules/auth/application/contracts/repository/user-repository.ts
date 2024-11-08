import { User } from "../../../domain/entity/user";

export interface UserRepository {
  create(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | undefined>;
  getById(id: string): Promise<User>;
}
