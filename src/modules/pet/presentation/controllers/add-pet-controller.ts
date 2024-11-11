import { SessionDTO } from "../../../auth";
import { Controller, HttpResponse, ok } from "../../../common";
import { AddPetUseCase } from "../../application/use-case/add-pet-use-case";

export class AddPetController implements Controller {
  constructor(private readonly addPetUseCase: AddPetUseCase) {}

  async handle(params: Params): Promise<HttpResponse<any>> {
    const response = await this.addPetUseCase.execute({
      ...params,
      guardianId: params.session.user.id,
    });
    return ok(response);
  }
}

type Params = {
  session: SessionDTO;
  birthday: Date;
  name: string;
  specie: string;
  breed: string;
};
