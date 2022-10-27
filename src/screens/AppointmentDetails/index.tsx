import { ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import bannerImg from '../../assets/banner.png';

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
      <ImageBackground source={bannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
        <Text style={styles.title}>Legendaries</Text>
        <Text style={styles.subtitle}>
          It's today that we will reach the challenger without losing a md10
          match
        </Text>
        </View>
      </ImageBackground>
    </Background>
  );
}
