import { Text } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { Container } from '@components/ui';
import { GoBackHeader } from '@components/ui/layout/GoBackHeader';

type HabitDetailScreenRouteProp = RouteProp<PrivateStackParamList, 'HabitDetail'>;
type HabitDetailScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'HabitDetail'>;

type HabitDetailScreenProps = {
  route: HabitDetailScreenRouteProp;
  navigation: HabitDetailScreenNavigationProp;
};

export const HabitDetailScreen = ({ navigation, route }: HabitDetailScreenProps) => {
  const { habit } = route.params;

  return (
    <Container>
      <GoBackHeader title={habit.title} />

      <Text>{habit.description}</Text>
    </Container>
  );
};
