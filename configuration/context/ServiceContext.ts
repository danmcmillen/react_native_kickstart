import { createContext } from 'react';
import { FindUserByIdUseCase } from '../../domain/usecases/findUserByIdUseCase';
export interface UserService {
  findUserByIdUseCase: FindUserByIdUseCase;
}
interface ServiceContextType {
  userService: UserService;
}
export const ServiceContext = createContext<ServiceContextType | null>(null);
