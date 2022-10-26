import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

export function AppointmentDetails() {
  function ShareAppointment() {
    return (
      <BorderlessButton>
        <Fontisto name='share' size={24} color={theme.colors.primary} />
      </BorderlessButton>
    );
  }

  return (
    <Background>
      <Header title='Details' action={<ShareAppointment />} />
    </Background>
  );
}
