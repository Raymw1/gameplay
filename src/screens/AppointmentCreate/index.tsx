import { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title='Schedule a match' />
      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 },
        ]}
      >
        Category
      </Text>
      <CategorySelect
        hasCheckBox
        setCategory={handleCategorySelect}
        categorySelected={category}
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <View style={styles.image} />
            {/* <GuildIcon /> */}

            <View style={styles.selectBody}>
              <Text style={styles.label}>Select a server</Text>
            </View>
            <Feather
              name='chevron-right'
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
        <View style={styles.field}>
          <View>
            <Text style={styles.label}>Month and day</Text>
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>/</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Hour and minutes</Text>
            <View style={[styles.column, {alignSelf: 'flex-end'}]}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>:</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}
