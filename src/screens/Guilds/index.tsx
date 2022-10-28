import { FlatList, View } from 'react-native';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export type IGuild = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type GuildsProps = {
  handleGuildSelect: (guild: IGuild) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds: IGuild[] = [
    {
      id: '1',
      name: 'Legendaries',
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guild}
      />
    </View>
  );
}
