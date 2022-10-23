import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/Raymw1.png' />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Rayan</Text>
        </View>
        <Text style={styles.message}>It's time for a big win!</Text>
      </View>
    </View>
  );
}
