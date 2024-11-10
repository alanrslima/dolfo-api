import { Controller, HttpResponse, ok } from "../../../common";
import { PetQuery } from "../../application/contract/query/pet-query";

export class ListMyPetsController implements Controller {
  constructor(private readonly petQuery: PetQuery) {}

  async handle(params: any): Promise<HttpResponse<any>> {
    const response = await this.petQuery.listPets();
    return ok(response);
  }
}
