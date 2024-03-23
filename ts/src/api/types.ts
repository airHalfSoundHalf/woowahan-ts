const enum ResponseStatus {
  SUCCESS,
  FAIL,
  SERVER_ERROR,
  CLIENT_ERROR,
}

class AxiosError extends Error {
  response: any;
  status: string;
}

export class APIResponse<Ok, Err = string> {
  private readonly data: Ok | Err | null;
  private readonly status: ResponseStatus;
  private readonly statusCode: number | null;

  constructor(data: Ok | Err | null, statusCode: number | null, status: ResponseStatus) {
    this.data = data;
    this.status = status;
    this.statusCode = statusCode;
  }

  public static Success<T, E = string>(data: T): APIResponse<T, E> {
    return new this<T, E>(data, 200, ResponseStatus.SUCCESS);
  }

  public static Error<T, E = unknown>(init: AxiosError): APIResponse<T, E> {
    if (!init.response) {
      return new this<T, E>(null, null, ResponseStatus.CLIENT_ERROR);
    }

    if (!init.response.data?.result) {
      return new this<T, E>(null, init.response.status, ResponseStatus.SERVER_ERROR);
    }

    return new this<T, E>(init.response.data.result, init.response.status, ResponseStatus.FAIL);
  }
}
