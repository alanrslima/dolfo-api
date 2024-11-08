import { BaseError, BaseErrorSerializeProps } from "../../common";

export class InvalidTextError extends BaseError {
  statusCode = 400;

  constructor(private readonly field?: string) {
    super("Invalid text error");
    Object.setPrototypeOf(this, InvalidTextError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "The provided text is invalid", field: this.field }];
  }
}
