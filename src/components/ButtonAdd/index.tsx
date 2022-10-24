import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonAdd(props: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <MaterialCommunityIcons
        name='plus'
        size={24}
        color={theme.colors.heading}
      />
    </RectButton>
  );
}
