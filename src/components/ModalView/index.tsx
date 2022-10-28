import { ReactNode } from 'react';
import { Modal, ModalProps, View } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type ModalViewProps = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...props }: ModalViewProps) {
  return (
    <Modal transparent animationType='slide' {...props}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
