import { SessionDTO } from "../../../auth";
import { Controller, HttpResponse, ok } from "../../../common";
import { PetQuery } from "../../application/contract/query/pet-query";

export class ListMyPetsController implements Controller {
  constructor(private readonly petQuery: PetQuery) {}

  async handle(params: Params): Promise<HttpResponse<any>> {
    const response = await this.petQuery.listPets(params.session.user.id);
    return ok(response);
  }
}

type Params = {
  session: SessionDTO;
};
