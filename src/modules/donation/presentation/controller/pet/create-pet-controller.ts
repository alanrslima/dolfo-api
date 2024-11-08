import { Controller, ok, HttpResponse } from "../../../../common";
import {
  CreatePetUseCase,
  Input,
} from "../../../application/use-case/create-pet-use-case";

export class CreatePetController implements Controller {
  constructor(private readonly createPetUseCase: CreatePetUseCase) {}

  async handle(params: ParamsProps): Promise<HttpResponse<any>> {
    const response = await this.createPetUseCase.execute(params);
    return ok(response);
  }
}

type ParamsProps = Input;
