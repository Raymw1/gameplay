import { useCallback } from 'react';

import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import * as SplashScreen from 'expo-splash-screen';

import { SignIn } from './src/screens/SignIn';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Background onLayout={onLayoutRootView}>
      {/* <SignIn /> */}
      <Home />
      <StatusBar style='light' translucent />
    </Background>
  );
}
