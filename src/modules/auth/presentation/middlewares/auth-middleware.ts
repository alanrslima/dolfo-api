import jwt from "jsonwebtoken";
import { env, HttpResponse, Middleware, ok } from "../../../common";
import { NotAuthorizedError } from "../../error/not-authorized-error";
import { UserRepository } from "../../application/contracts/repository/user-repository";

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly userRepository: UserRepository // private readonly sessionRepository: SessionRepository
  ) {}

  private decrypt(ciphertext: string): string {
    const plaintext: any = jwt.verify(ciphertext, env.JWT_SECRET);
    return plaintext;
  }

  private decode(plaintext: string): string {
    const decoded = jwt.decode(plaintext);
    if (decoded === null) {
      throw new Error("Falha de decodificação");
    }
    if (typeof decoded === "string") {
      return decoded;
    }
    return decoded?.sub ?? "";
  }

  async handle(
    request: AuthMiddlewareRequest
  ): Promise<HttpResponse<AuthMiddlewareResponse>> {
    // this.sessionRepository.deleteExpired();
    const { authorization } = request;
    if (authorization === undefined) {
      throw new NotAuthorizedError();
    }

    try {
      const [, token] = authorization.split(" ");
      this.decrypt(token);
      const userId = this.decode(token);
      const user = await this.userRepository.getById(userId);
      // const session = await this.sessionRepository.getByToken(token);
      return ok({
        session: {
          clientId: user.getId(),
          clientName: user.getName(),
        },
      });
    } catch (error) {
      throw new NotAuthorizedError();
    }
  }
}

export type AuthMiddlewareRequest = {
  authorization?: string;
};

export type AuthMiddlewareResponse = {
  session: {
    clientId: string;
    clientName: string;
  };
};
