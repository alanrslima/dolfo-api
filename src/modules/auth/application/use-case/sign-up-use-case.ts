import { UseCase } from "../../../common";
import { User } from "../../domain/entity/user";
import { UserAlreadyExistsError } from "../../error/user-already-exists-error";
import { UserRepository } from "../contracts/repository/user-repository";

export class SignUpUseCase implements UseCase<Input, Output> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    const userExists = await this.userRepository.getByEmail(input.email);
    if (userExists) throw new UserAlreadyExistsError();
    const user = User.create({
      name: input.name,
      email: input.email,
      rawPassword: input.password,
      role: "user",
    });
    await this.userRepository.create(user);
  }
}

export type Input = {
  email: string;
  name: string;
  password: string;
};

type Output = void;
