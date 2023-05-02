import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { apiClient, request, ApiError, handleApiError } from './apiClient';

const mock = new MockAdapter(apiClient);

describe('apiClient', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should make a successful GET request', async () => {
    const responseData = { data: 'test' };
    mock.onGet('/test').reply(200, responseData);

    const result = await request<{ data: string }>({ method: 'GET', url: '/test' });

    expect(result).toEqual(responseData);
  });

  it('should handle a failed GET request', async () => {
    const errorMessage = 'Request failed';
    mock.onGet('/test').reply(500, { message: errorMessage });

    const result = await request<{ data: string }>({ method: 'GET', url: '/test' });

    expect(result).toEqual({ message: errorMessage, status: 500 });
  });

  it('should handle an Axios error', () => {
    const error = new axios.AxiosError('Network error', undefined, undefined, null);
    const apiError: ApiError = handleApiError(error);

    expect(apiError).toEqual({ message: 'Network error', status: 500 });
  });

  it('should handle an unknown error', () => {
    const error = 'Unknown error';
    const apiError: ApiError = handleApiError(error);

    expect(apiError).toEqual({ message: 'An unknown error occurred.', status: 500 });
  });
});
