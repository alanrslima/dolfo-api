export interface HttpResponse<T> {
  statusCode: number;
  body: T;
  type: HttpResponseType;
  headers?: { [key: string]: any };
}

export type HttpResponseType = "json" | "file" | "stream";
