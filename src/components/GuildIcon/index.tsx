import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri =
    'https://imgs.search.brave.com/hMTE6uL9Li7jlsZl9T2becazIwUN9KP-gK_p_3I7bR4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9oYXBw/eWxhbmQuZ2FtZXMv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDQvRGlzY29yZF9J/Y29uLnBuZw';
  return <Image source={{ uri }} style={styles.image} resizeMode='cover' />;
}
