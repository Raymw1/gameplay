import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';

type StackNavigatorProps = {
  Home: undefined;
  SignIn: undefined;
  AppointmentDetails: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackNavigatorProps>();

export type NavigationStackRoutes =
  NativeStackNavigationProp<StackNavigatorProps>;

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
    </Navigator>
  );
}
