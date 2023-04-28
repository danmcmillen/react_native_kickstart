import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import { UserScreen } from "./UserScreen";
import createFindUserByIdUseCase from '../../domain/usecases/FindUserByIdUseCase';

jest.mock('../../domain/usecases/FindUserByIdUseCase');

describe('UserScreen', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loading state initially', () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    (createFindUserByIdUseCase as jest.Mock).mockReturnValue({
      execute: jest.fn().mockResolvedValue(mockUser),
    });

    const { getByText } = render(<UserScreen />);

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('renders user data when user is fetched', async () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    (createFindUserByIdUseCase as jest.Mock).mockReturnValue({
      execute: jest.fn().mockResolvedValue(mockUser),
    });

    const { getByText } = render(<UserScreen />);

    await waitFor(() => {
      expect(getByText(`Name: ${mockUser.name}`)).toBeTruthy();
      expect(getByText(`Email: ${mockUser.email}`)).toBeTruthy();
    });
  });

  it('handles errors when fetching user data', async () => {
    (createFindUserByIdUseCase as jest.Mock).mockReturnValue({
      execute: jest.fn().mockRejectedValue(new Error('Network error')),
    });

    const { getByText } = render(<UserScreen />);

    await waitFor(() => {
      expect(getByText('Loading...')).toBeTruthy();
    });
  });
});
