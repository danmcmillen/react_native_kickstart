import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { User } from '../../domain/entities/user';
import { UserScreen } from './UserScreen';
import { ServiceContext } from '../../configuration/context/ServiceContext';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
};

describe('UserScreen', () => {
  it('should render loading state initially', () => {
    const { getByText } = render(
      <ServiceContext.Provider value={null}>
        <UserScreen />
      </ServiceContext.Provider>,
    );

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should render user data when fetched', async () => {
    const userServiceMock = {
      findUserByIdUseCase: {
        execute: jest.fn().mockResolvedValue(mockUser),
      },
    };

    const { getByText } = render(
      <ServiceContext.Provider value={{ userService: userServiceMock }}>
        <UserScreen />
      </ServiceContext.Provider>,
    );

    await waitFor(() => getByText(`Name: ${mockUser.name}`));
    await waitFor(() => getByText(`Email: ${mockUser.email}`));
  });
});
