import { httpClient } from "./http-client";

export abstract class BaseHttpClient {
  readonly httpClient = httpClient;
}