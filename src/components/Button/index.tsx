import { Text } from 'react-native';

import { styles } from './styles';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type ButtonIconProps = RectButtonProps & {
  title?: string;
};

export function Button({
  title = 'Schedule',
  ...props
}: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
