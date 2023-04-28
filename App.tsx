import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UserScreen } from './presentation/screens/UserScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <UserScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
});
