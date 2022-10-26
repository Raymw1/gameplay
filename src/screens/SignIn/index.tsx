import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackRoutes } from '../../routes/auth.routes';

import { styles } from './styles';
import illustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

export function SignIn() {
  const navigation = useNavigation<NavigationStackRoutes>();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Arrange{'\n'}your gambling{'\n'}easily
          </Text>
          <Text style={styles.subtitle}>
            Form groups to play your favorite{'\n'}games with your friends.
          </Text>
          <ButtonIcon onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
