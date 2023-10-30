import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { Container } from '@components/ui';
import { GoBackHeader } from '@components/ui/layout/GoBackHeader';
import { Divider } from 'native-base';

type HabitCreateScreenRouteProp = RouteProp<PrivateStackParamList, 'HabitCreate'>;
type HabitCreateScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'HabitCreate'>;

type HabitCreateScreenProps = {
  route: HabitCreateScreenRouteProp;
  navigation: HabitCreateScreenNavigationProp;
};

export const HabitCreateScreen = ({ navigation, route }: HabitCreateScreenProps) => {
  return (
    <Container>
      <GoBackHeader title={'Создание привычки'} />
      <Divider />
    </Container>
  );
};
