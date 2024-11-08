import { Controller, ok, HttpResponse } from "../../../common";
import {
  SignUpUseCase,
  Input,
} from "../../application/use-case/sign-up-use-case";

export class SignUpController implements Controller {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle(params: ParamsProps): Promise<HttpResponse<any>> {
    const response = await this.signUpUseCase.execute(params);
    return ok(response);
  }
}

type ParamsProps = Input;
