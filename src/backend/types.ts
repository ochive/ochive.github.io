export interface ApiResult<T> {
  retCode: string;
  retMsg: string;
  data: T;
}
