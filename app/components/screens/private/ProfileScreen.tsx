import { Button, Divider, Flex, Stack, Text } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { useAuthContext } from '@app/providers/AuthProvider/AuthContextProvider';
import { Container } from '@components/ui';
import { FIREBASE_AUTH } from '@src/firebaseConfig';
import { GoBackHeader } from '@components/ui/layout/GoBackHeader';

type ProfileScreenRouteProp = RouteProp<PrivateStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'Profile'>;

type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen = ({}: ProfileScreenProps) => {
  const { userInfo } = useAuthContext();

  return (
    <Container>
      <GoBackHeader title={'Профиль'} />

      <Stack space={'xs'}>
        <Divider />
        <Flex>
          <Text fontSize={'lg'}>Аккаунт</Text>
          <Text>Почта: {userInfo?.email}</Text>
        </Flex>
        <Button w={'100%'} variant={'outline'} onPress={() => FIREBASE_AUTH.signOut()}>
          Выйти
        </Button>
      </Stack>
    </Container>
  );
};
