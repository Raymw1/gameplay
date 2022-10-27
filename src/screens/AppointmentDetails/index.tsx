import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import bannerImg from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rayan',
      avatar_url: 'https://github.com/Raymw1.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Diego',
      avatar_url: 'https://github.com/diego3g.png',
      status: 'busy',
    },
    {
      id: '3',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'busy',
    },
  ];

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
      <ListHeader title='Players' subtitle='Total 3' />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
    </Background>
  );
}
