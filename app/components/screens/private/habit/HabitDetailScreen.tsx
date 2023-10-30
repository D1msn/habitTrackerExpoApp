import { Stack, Text, VStack } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { Container } from '@components/ui';
import { GoBackHeader } from '@components/ui/layout/GoBackHeader';
import { HabitColorDictionary } from '@api/habits/enums';

type HabitDetailScreenRouteProp = RouteProp<PrivateStackParamList, 'HabitDetail'>;
type HabitDetailScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'HabitDetail'>;

type HabitDetailScreenProps = {
  route: HabitDetailScreenRouteProp;
  navigation: HabitDetailScreenNavigationProp;
};

export const HabitDetailScreen = ({ route }: HabitDetailScreenProps) => {
  const {
    habit: { description, color, startDate, title, streak },
  } = route.params;

  const dateString = new Date(startDate).toLocaleString('ru-Ru');

  return (
    <Container>
      <GoBackHeader title={title} headingProps={{ color: HabitColorDictionary[color] }} />
      <VStack space={'xs'}>
        <Stack>
          <Text color={'blueGray.800:alpha.50'} fontSize={'sm'}>
            Дата создания
          </Text>
          <Text fontSize={'md'}>{dateString}</Text>
        </Stack>
        <Stack>
          <Text color={'blueGray.800:alpha.50'} fontSize={'sm'}>
            Описание
          </Text>
          <Text fontSize={'md'}>{description || 'Отсутствует'}</Text>
        </Stack>
        <Stack>
          <Text color={'blueGray.800:alpha.50'} fontSize={'sm'}>
            Вподряд
          </Text>
          <Text fontSize={'md'}>{streak}</Text>
        </Stack>
      </VStack>
    </Container>
  );
};
