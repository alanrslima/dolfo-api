import { UseCase } from "../../../common";
import { UserSession } from "../../domain/entity/user-session";
import { InvalidCredentialsError } from "../../error/invalid-credentials-error";
import { UserRepository } from "../contracts/repository/user-repository";

export class SignInUseCase implements UseCase<Input, Output> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    if (!user) throw new InvalidCredentialsError();
    const session = UserSession.createWithPassword({
      user,
      rawPassword: input.password,
    });
    return { token: session.getToken() };
  }
}

export type Input = {
  email: string;
  password: string;
};

type Output = {
  token: string;
};
