import { BaseError, BaseErrorSerializeProps } from "../../common";

export class InvalidCredentialsError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Invalid credentials");
    Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message:
          "Credênciais inválidas! Por favor, verifique seu usuário e senha e tente novamente",
      },
    ];
  }
}
