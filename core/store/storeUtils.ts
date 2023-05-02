import { ApiError } from '../api/apiClient';

type ApiResult<T> = T | ApiError;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isApiError(value: any): value is ApiError {
  return (
    value &&
    typeof value.message === 'string' &&
    typeof value.status === 'number'
  );
}

export const handleApiResult = <T, S>(
  result: ApiResult<T>,
  set: (fn: (state: S) => Partial<S>) => void,
  onSuccess: (value: T) => void
): void => {
  if (isApiError(result)) {
    set((state) => ({ ...state, error: result }));
  } else {
    onSuccess(result as T);
  }
};
