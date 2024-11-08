import jwt from "jsonwebtoken";
import { env } from "../../../common";

const EXPIRES_IN_SECONDS = 60 * 60 * 24; // 1 dia

type CreateProps = {
  token: string;
  expiresAt: Date;
  clientId: string;
};

type BuildProps = CreateProps & {
  id: string;
};

export abstract class Session {
  private id: string;
  private token: string;
  private expiresAt: Date;
  private clientId: string;

  constructor(props: BuildProps) {
    this.id = props.id;
    this.token = props.token;
    this.expiresAt = props.expiresAt;
    this.clientId = props.clientId;
  }

  protected static generateExpiresAt() {
    return new Date(new Date().getTime() + EXPIRES_IN_SECONDS * 1000);
  }

  protected static createToken(data: { clientId: string }): string {
    const ciphertext = jwt.sign({}, env.JWT_SECRET, {
      subject: JSON.stringify(data),
      expiresIn: EXPIRES_IN_SECONDS,
    });
    return ciphertext;
  }

  getToken() {
    return this.token;
  }

  getId() {
    return this.id;
  }

  getExpiresAt() {
    return this.expiresAt;
  }

  getClientId() {
    return this.clientId;
  }
}
