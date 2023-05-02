import { ApiError } from "../api/apiClient";
import { handleApiResult } from "./storeUtils";

interface TestState {
  value: number;
  error: ApiError | null;
}

describe('handleApiResult', () => {
  it('should call onSuccess when the result is not an ApiError', () => {
    const result = 42;
    const set = jest.fn();
    const onSuccess = jest.fn();

    handleApiResult<number, TestState>(result, set, onSuccess);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith(result);
    expect(set).toHaveBeenCalledTimes(0);
  });

  it('should call set with an error when the result is an ApiError', () => {
    const result: ApiError = { message: 'An error occurred', status: 500 };
    const set = jest.fn();
    const onSuccess = jest.fn();

    handleApiResult<number, TestState>(result, set, onSuccess);

    expect(set).toHaveBeenCalledTimes(1);
    expect(set).toHaveBeenCalledWith(
      expect.any(Function)
    );
    expect(onSuccess).toHaveBeenCalledTimes(0);

    // Call the setState function with a test state
    const setStateFn = set.mock.calls[0][0];
    const testState: TestState = { value: 0, error: null };
    const newState = setStateFn(testState);

    expect(newState).toEqual({ error: result, value: 0 });
  });
});
