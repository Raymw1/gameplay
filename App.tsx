import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
      <StatusBar style="light" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
