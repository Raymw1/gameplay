import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

type StackNavigatorProps = {
  Home: undefined;
  SignIn: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackNavigatorProps>();

export type NavigationStackRoutes =
  NativeStackNavigationProp<StackNavigatorProps>;

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
    </Navigator>
  );
}
