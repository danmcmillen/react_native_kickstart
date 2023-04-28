import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import noop from 'lodash';

import { User } from '../../domain/entities/user';
import { ServiceContext } from '../../configuration/context/ServiceContext';

export const UserScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const services = useContext(ServiceContext);

  useEffect(() => {
    const fetchData = async () => {
      if (services?.userService) {
        const user = await services.userService.findUserByIdUseCase.execute(1);
        setUser(user);
        return;
      }
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
