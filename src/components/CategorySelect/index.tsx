import { ScrollView } from 'react-native';

import { styles } from './styles';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

type CategorySelectProps = {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 24 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
