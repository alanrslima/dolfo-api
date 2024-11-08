import { BaseError, BaseErrorSerializeProps } from "../../common";

export class PetNotFoundError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Pet not found");
    Object.setPrototypeOf(this, PetNotFoundError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "O pet informado não foi encontrado" }];
  }
}
