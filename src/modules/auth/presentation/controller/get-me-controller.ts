import { Controller, ok, HttpResponse } from "../../../common";

export class GetMeController implements Controller {
  constructor() {}

  async handle(params: ParamsProps): Promise<HttpResponse<any>> {
    console.log("params", params);
    return ok(params);
  }
}

type ParamsProps = {
  user: any;
};
