import {
  AddIcon,
  Flex,
  HamburgerIcon,
  HStack,
  IconButton,
  Spinner,
  Text,
  View,
  VStack,
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { useGetHabits } from '@api/habits/useGetHabits';
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
  console.log(habitsResponse, 'haaaaaabits');

  return (
    <Container>
      <Flex height={70} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        {habitsResponse && <Text fontSize={'xs'}>Всего привычек: {habitsResponse.totalCount}</Text>}

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

      <View flex={1}>
        {isLoading || !habitsResponse ? (
          <Spinner />
        ) : (
          <>
            <VStack>
              {habitsResponse.habits.map((habit) => (
                <HabitItem
                  key={habit.title + habit.startDate}
                  habit={habit}
                  navigation={navigation}
                />
              ))}
            </VStack>
          </>
        )}
      </View>
    </Container>
  );
};
