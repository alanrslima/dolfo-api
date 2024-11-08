import { User } from "../../../domain/entity/user";
import { InvalidCredentialsError } from "../../../error/invalid-credentials-error";
import { UserMemoryRepository } from "../../../infra/repository/memory/user-memory-repository";
import { SignInUseCase } from "../sign-in-use-case";

it("should not make signin if the user does not exists", async () => {
  const userMemoryRepository = new UserMemoryRepository();
  const signInUseCase = new SignInUseCase(userMemoryRepository);
  const execute = async () =>
    await signInUseCase.execute({ email: "john@email.com", password: "123" });
  expect(execute).rejects.toThrow(InvalidCredentialsError);
});

it("should not make signin if the password is wrong", async () => {
  const user = User.create({
    email: "john@email.com",
    name: "John Doe",
    role: "user",
    rawPassword: "12345678",
  });
  const userMemoryRepository = new UserMemoryRepository([user]);
  const signInUseCase = new SignInUseCase(userMemoryRepository);
  const execute = async () =>
    await signInUseCase.execute({ email: "john@email.com", password: "123" });
  expect(execute).rejects.toThrow(InvalidCredentialsError);
});

it("should make signin", async () => {
  const user = User.create({
    email: "john@email.com",
    name: "John Doe",
    role: "user",
    rawPassword: "12345678",
  });
  const userMemoryRepository = new UserMemoryRepository([user]);
  const signInUseCase = new SignInUseCase(userMemoryRepository);
  const response = await signInUseCase.execute({
    email: "john@email.com",
    password: "12345678",
  });
  expect(response.token).toBeDefined();
});
