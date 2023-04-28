import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import noop from 'lodash';

import userApiDataSource from '../../data/dataSources/UserApiDataSource';
import createFindUserByIdUseCase from '../../domain/usecases/FindUserByIdUseCase';
import { User } from '../../domain/entities/User';
import createUserRepository from '../../data/repositories/UserRepository';

export const UserScreen = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userRepository = createUserRepository(userApiDataSource);
      const getUserByIdUseCase = createFindUserByIdUseCase(userRepository);
      const user = await getUserByIdUseCase.execute(1);
      setUser(user);
    };

    fetchData().catch(noop);
  }, []);

  return (
    <View>
      {user ? (
        <>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
