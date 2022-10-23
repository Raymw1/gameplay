import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type BackgroundProps = {
  children: ReactNode;
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
};

export function Background({ children, onLayout }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      onLayout={onLayout}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
