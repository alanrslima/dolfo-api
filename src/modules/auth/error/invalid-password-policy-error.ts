import { BaseError, BaseErrorSerializeProps } from "../../common";

export class InvalidPasswordPolicyError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Invalid password policy");
    Object.setPrototypeOf(this, InvalidPasswordPolicyError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "A senha deve possuir pelo menos 6 dígitos" }];
  }
}
