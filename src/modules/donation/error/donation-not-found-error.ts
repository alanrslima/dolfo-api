import { BaseError, BaseErrorSerializeProps } from "../../common";

export class DonationNotFoundError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Donation not found");
    Object.setPrototypeOf(this, DonationNotFoundError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [{ message: "O pedido de doação informado não foi encontrado" }];
  }
}
