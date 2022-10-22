import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
  return (
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
        <ButtonIcon />
      </View>
    </View>
  );
}
