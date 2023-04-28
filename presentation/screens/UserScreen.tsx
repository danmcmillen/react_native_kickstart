import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { UserRepositoryImpl } from '../../data/repositories_impl/UserRepositoryImpl';
import { UserApiDataSource } from '../../data/data_sources/UserApiDataSource';
import { FindUserByIdUseCase } from '../../domain/usecases/FindUserByIdUseCase';
import { User } from '../../domain/entities/User';

export const UserScreen = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataSource = new UserApiDataSource();
      const userRepository = new UserRepositoryImpl(dataSource);
      const getUserByIdUseCase = new FindUserByIdUseCase(userRepository);
      const user = await getUserByIdUseCase.execute(1);
      setUser(user);
    };

    fetchData().catch();
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
