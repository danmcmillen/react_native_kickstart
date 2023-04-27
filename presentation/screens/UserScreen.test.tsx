import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import {UserScreen} from "./UserScreen";
import { FindUserByIdUseCase } from '../../domain/usecases/FindUserByIdUseCase';
import { User } from '../../domain/entities/User';

// Mock FindUserByIdUseCase
jest.mock('../../domain/usecases/FindUserByIdUseCase');

describe('UserScreen', () => {
    beforeEach(() => {
        // Clear all instances and calls to the mock constructor and methods
        (FindUserByIdUseCase as jest.Mock).mockClear();
    });

    it('renders loading state and user data when loaded', async () => {
        const mockUser: User = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
        };

        // Set up mock implementation
        (FindUserByIdUseCase as jest.Mock).mockImplementationOnce(() => {
            return {
                execute: () => Promise.resolve(mockUser),
            };
        });

        // Render the component
        const { getByText } = render(<UserScreen />);

        // Verify that the loading state is displayed
        expect(getByText('Loading...')).toBeTruthy();

        // Wait for the user data to be loaded
        await waitFor(() => screen.getByText(`Name: ${mockUser.name}`));

        // Verify that the user data is displayed
        expect(getByText(`Name: ${mockUser.name}`)).toBeTruthy();
        expect(getByText(`Email: ${mockUser.email}`)).toBeTruthy();
    });

});
