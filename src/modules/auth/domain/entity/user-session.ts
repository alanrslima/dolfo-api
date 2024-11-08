import { randomUUID } from "node:crypto";
import { InvalidCredentialsError } from "../../error/invalid-credentials-error";
import { Session } from "./session";
import { User } from "./user";

type CreateWithoutPasswordProps = {
  user: User;
};

type CreateWithPasswordProps = CreateWithoutPasswordProps & {
  rawPassword: string;
};

export class UserSession extends Session {
  static createWithPassword(props: CreateWithPasswordProps) {
    const isValid = props.user.getPassword()?.valid(props.rawPassword);
    if (!isValid) {
      throw new InvalidCredentialsError();
    }
    return new UserSession({
      expiresAt: this.generateExpiresAt(),
      token: this.createToken({
        clientId: props.user.getId(),
      }),
      id: randomUUID(),
      clientId: props.user.getId(),
    });
  }
}
