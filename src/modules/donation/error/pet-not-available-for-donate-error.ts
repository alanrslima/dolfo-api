import { BaseError, BaseErrorSerializeProps } from "../../common";

export class PetNotAvailableForDonate extends BaseError {
  statusCode = 400;

  constructor() {
    super("Pet not available for donate");
    Object.setPrototypeOf(this, PetNotAvailableForDonate.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "O pet não está disponível para doações" }];
  }
}
