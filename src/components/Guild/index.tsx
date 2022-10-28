import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import type { IGuild } from '../../screens/Guilds';

import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type GuildProps = TouchableOpacityProps & {
  data: IGuild;
};

export function Guild({ data, ...props }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85} {...props}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Owner' : 'Visitant'}</Text>
        </View>
      </View>
      <Feather name='chevron-right' size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}
