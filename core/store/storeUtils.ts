import { ApiError } from '../api/apiClient';

type ApiResult<T> = T | ApiError;

export const handleApiResult = <T, S>(
  result: ApiResult<T>,
  set: (fn: (state: S) => Partial<S>) => void,
  onSuccess: (value: T) => void
): void => {
  if ('message' in (result as ApiError)) {
    set((state) => ({ ...state, error: result as ApiError }));
  } else {
    onSuccess(result as T);
  }
};
