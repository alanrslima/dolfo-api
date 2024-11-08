import { BaseError, BaseErrorSerializeProps } from "../../common";

export class InvalidNameError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Invalid email");
    Object.setPrototypeOf(this, InvalidNameError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "O nome informado é inválido" }];
  }
}
