// api/apiClient.js
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  // Any other default configuration you want to set
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify request configuration or add authentication tokens here
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Modify response data or handle common status codes here
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  }
);

export interface ApiError {
  message: string;
  status: number;
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof Error && (error as AxiosError).response) {
    const axiosError = error as AxiosError;
    return {
      message: axiosError.response?.data.message || axiosError.message,
      status: axiosError.response.status,
    };
  } else if (error instanceof Error) {
    return { message: error.message, status: 500 };
  } else {
    return { message: 'An unknown error occurred.', status: 500 };
  }
};

export const request = async <T>(
  config: AxiosRequestConfig
): Promise<T | ApiError> => {
  try {
    const response: AxiosResponse<T> = await apiClient(config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
