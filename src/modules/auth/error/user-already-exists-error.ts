import { BaseError, BaseErrorSerializeProps } from "../../common";

export class UserAlreadyExistsError extends BaseError {
  statusCode = 400;

  constructor() {
    super("User already exists");
    Object.setPrototypeOf(this, UserAlreadyExistsError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "O usuário já existe" }];
  }
}
