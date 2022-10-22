import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

import discordImg from '../../assets/discord.png';

type ButtonIconProps = TouchableOpacityProps & {
  title?: string;
};

export function ButtonIcon({
  title = 'Sign in with Discord',
  ...props
}: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
