import { User } from "../../../domain/entity/user";
import { UserAlreadyExistsError } from "../../../error/user-already-exists-error";
import { UserMemoryRepository } from "../../../infra/repository/memory/user-memory-repository";
import { SignUpUseCase } from "../sign-up-use-case";

it("should make user sign up", async () => {
  const userMemoryRepository = new UserMemoryRepository();
  const signUpUseCase = new SignUpUseCase(userMemoryRepository);
  await signUpUseCase.execute({
    email: "john@email.com",
    name: "John doe",
    password: "12345678",
  });
  expect(userMemoryRepository.getData()).toHaveLength(1);
  const user = userMemoryRepository.getData()[0];
  expect(user.getEmail()).toEqual("john@email.com");
  expect(user.getName()).toEqual("John doe");
});

it("should not make sign up if email already exists", async () => {
  const user = User.create({
    email: "john@email.com",
    name: "John Doe",
    role: "user",
    rawPassword: "12345678",
  });
  const userMemoryRepository = new UserMemoryRepository([user]);
  const signUpUseCase = new SignUpUseCase(userMemoryRepository);
  const execute = async () =>
    await signUpUseCase.execute({
      email: "john@email.com",
      name: "John Doe",
      password: "12345678",
    });
  expect(execute).rejects.toThrow(UserAlreadyExistsError);
});
