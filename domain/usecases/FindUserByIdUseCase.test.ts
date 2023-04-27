import {FindUserByIdUseCase} from "./FindUserByIdUseCase";
import {mockUserRepository} from "../repositories/UserRepository.test";

describe("GetUserByIdUseCase", () => {
    it("should get user by id", async () => {
        // Arrange
        const userId = 123;
        const expectedUserData = { id: userId, name: "John Doe" };
        const userRepository = mockUserRepository;
        userRepository.findUserById = jest.fn().mockResolvedValue(expectedUserData);
        const getUserByIdUseCase = new FindUserByIdUseCase(userRepository);

        // Act
        const userData = await getUserByIdUseCase.execute(userId);

        // Assert
        expect(userRepository.findUserById).toHaveBeenCalledWith(userId);
        expect(userData).toEqual(expectedUserData);
    });

    it("should return null if user not found", async () => {
        // Arrange
        const userId = 123;
        const userRepository = mockUserRepository;
        userRepository.findUserById = jest.fn().mockResolvedValue(null);
        const getUserByIdUseCase = new FindUserByIdUseCase(userRepository);

        // Act
        const userData = await getUserByIdUseCase.execute(userId);

        // Assert
        expect(userRepository.findUserById).toHaveBeenCalledWith(userId);
        expect(userData).toBeNull();
    });
});
