import {
  AddIcon,
  Flex,
  HamburgerIcon,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { useGetHabits } from '@api/habits/hooks/useGetHabits';
import { useAuthContext } from '@app/providers/AuthProvider/AuthContextProvider';
import { Container } from '@components/ui';
import { HabitItem } from '@components/ui/HabitItem';

type HomeScreenRouteProp = RouteProp<PrivateStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'Home'>;

type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { userInfo } = useAuthContext();
  const { habitsResponse, isLoading } = useGetHabits(userInfo?.uid);

  return (
    <Container>
      <Flex height={70} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <VStack>
          <Heading>Привычки</Heading>
          {habitsResponse && (
            <Text fontSize={'xs'}>Всего привычек: {habitsResponse.totalCount}</Text>
          )}
        </VStack>

        <HStack space={'xs'} ml={'auto'} direction={'row'}>
          <IconButton
            ml={'auto'}
            size={'lg'}
            onPress={() => navigation.navigate('HabitCreate')}
            icon={<AddIcon />}
            _icon={{
              color: 'white',
            }}
          />
          <IconButton
            size={'lg'}
            onPress={() => navigation.navigate('Profile')}
            icon={<HamburgerIcon />}
            _icon={{
              color: 'white',
            }}
          />
        </HStack>
      </Flex>

      <VStack space={'xs'} flex={1}>
        {isLoading || !habitsResponse ? (
          <Spinner />
        ) : (
          <ScrollView marginLeft={-15} marginRight={-15}>
            <VStack space={'xs'}>
              {habitsResponse.habits.map((habit) => (
                <HabitItem
                  key={habit.title + habit.startDate}
                  habit={habit}
                  navigation={navigation}
                />
              ))}
            </VStack>
          </ScrollView>
        )}
      </VStack>
    </Container>
  );
};
