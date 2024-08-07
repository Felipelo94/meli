export type DetailedItem = {
  id: string;
  title: string;
  picture: string;
  description: string;
};

type GetSuccessResponse<T> = {
  isOk: true;
  data: T;
  error: null;
};

type GetFailedResponse = {
  isOk: false;
  data: null;
  error: string;
};

export type GetAPIResponse<T> =
  | GetSuccessResponse<T>
  | GetFailedResponse;