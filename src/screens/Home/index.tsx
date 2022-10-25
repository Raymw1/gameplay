import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Legendaries',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '06/22 at 08:40pm',
      description:
        "It's today that we will reach the challenger without losing a md10 match",
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Legendaries',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '06/22 at 08:40pm',
      description:
        "It's today that we will reach the challenger without losing a md10 match",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title='Scheduled matches' subtitle='Total 6' />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment appointment={item} />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
