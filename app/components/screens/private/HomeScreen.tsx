import { Divider, Flex, HamburgerIcon, IconButton, Spinner, Text, View, VStack } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { useGetHabits } from '@api/habits/useGetHabits';
import { useAuthContext } from '@app/providers/AuthProvider/AuthContextProvider';
import { Container } from '@components/ui';

type HomeScreenRouteProp = RouteProp<PrivateStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'Home'>;

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
      <Flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        {habitsResponse && <Text fontSize={'xs'}>Всего привычек: {habitsResponse.totalCount}</Text>}
        <IconButton
          ml={'auto'}
          size={'lg'}
          onPress={() => navigation.navigate('Profile')}
          icon={<HamburgerIcon />}
          _icon={{
            color: 'white',
          }}
        />
      </Flex>

      <View flex={1}>
        {isLoading || !habitsResponse ? (
          <Spinner />
        ) : (
          <>
            <VStack>
              {habitsResponse.habits.map((habit) => (
                <VStack py={5} key={habit.title}>
                  <Divider mb={2} />
                  <Flex>
                    <Text onPress={() => navigation.navigate('HabitDetail', { habit })}>
                      {habit.title}
                    </Text>
                    <Text
                      style={{
                        color: 'gray',
                      }}
                      fontSize="xs">
                      {habit.description}
                    </Text>
                  </Flex>
                  <Divider mt={2} />
                </VStack>
              ))}
            </VStack>
          </>
        )}
      </View>
    </Container>
  );
};
