import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import discordImg from '../../assets/discord.png';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type ButtonIconProps = RectButtonProps & {
  title?: string;
};

export function ButtonIcon({
  title = 'Sign in with Discord',
  ...props
}: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
