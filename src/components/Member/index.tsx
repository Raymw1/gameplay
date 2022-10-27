import { Text, View } from 'react-native';

import { styles } from './styles';

import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

export type IMember = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type MemberProps = {
  data: IMember;
};

export function Member({
  data: { id, username, avatar_url, status },
}: MemberProps) {
  const { on, primary } = theme.colors;
  const isOnline = status === 'online';

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />
      <View>
        <Text style={styles.title}>{username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />
          <Text style={styles.nameStatus}>{isOnline ? 'Online' : 'Busy'}</Text>
        </View>
      </View>
    </View>
  );
}
