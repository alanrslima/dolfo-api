import { HttpResponse, HttpResponseType } from "../contract/http-response";

export const ok = <T>(
  data: T,
  type: HttpResponseType = "json",
  headers?: { [key: string]: any }
): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
  type,
  headers,
});

export const created = (
  data: any,
  type: HttpResponseType = "json"
): HttpResponse<any> => ({
  statusCode: 201,
  body: data,
  type,
});

export const noContent = (
  type: HttpResponseType = "json"
): HttpResponse<any> => ({
  statusCode: 204,
  body: null,
  type,
});
