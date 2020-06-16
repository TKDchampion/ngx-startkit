// export declare class ConfigOptions {
//   configURL: string;
// }
export class HttpDefaultOptions {
  baseApiURL: string;
  headers: {};
}
export class JWTOptions {
  key: string;
}
export interface HttpRequestOptions {
  headers?: object;
  queryObject?: object;
  body?: object;
  baseURL?: string;
}
