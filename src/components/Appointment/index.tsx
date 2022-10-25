import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { categories } from '../../utils/categories';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from './styles';

import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';

export type Guild = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type IAppointment = {
  id: string;
  guild: Guild;
  category: string;
  date: string;
  description: string;
};

type AppointmentProps = RectButtonProps & {
  appointment: IAppointment;
};

export function Appointment({ appointment, ...props }: AppointmentProps) {
  const [category] = categories.filter(
    (item) => item.id === appointment.category
  );
  const { primary, on } = theme.colors;

  return (
    <RectButton {...props}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{appointment.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{appointment.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={appointment.guild.owner ? primary : on} />
              <Text
                style={[
                  styles.player,
                  { color: appointment.guild.owner ? primary : on },
                ]}
              >
                {appointment.guild.owner ? 'Owner' : 'Visitant'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
