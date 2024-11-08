import { BaseError, BaseErrorSerializeProps } from "../../common";

export class NotAllowedToApproveDonationError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Not allowed to approve donation");
    Object.setPrototypeOf(this, NotAllowedToApproveDonationError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      { message: "O usuário não possui permissão para rejeitar estar doação" },
    ];
  }
}
