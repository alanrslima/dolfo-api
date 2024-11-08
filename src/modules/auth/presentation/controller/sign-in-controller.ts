import { Controller, ok, HttpResponse } from "../../../common";
import {
  SignInUseCase,
  Input,
} from "../../application/use-case/sign-in-use-case";

export class SignInController implements Controller {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle(params: ParamsProps): Promise<HttpResponse<any>> {
    const response = await this.signInUseCase.execute(params);
    return ok(response);
  }
}

type ParamsProps = Input;
