import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UserScreen } from './presentation/screens/UserScreen';
import { ServiceContext } from './configuration/context/ServiceContext';
import { createCompositionRoot } from './configuration/context/compositionRoot';

const App = () => {
  return (
    <View style={styles.container}>
      <UserScreen />
      <StatusBar style="auto" />
    </View>
  );
};

const AppWithProvider = () => {
  const compositionRoot = createCompositionRoot();
  return (
    <ServiceContext.Provider
      value={{ userService: compositionRoot.userService }}
    >
      <App />
    </ServiceContext.Provider>
  );
};

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppWithProvider;
