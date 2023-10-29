import {
  ArrowBackIcon,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { useAuthContext } from '@app/providers/AuthProvider/AuthContextProvider';
import { Container } from '@components/ui';
import { FIREBASE_AUTH } from '@src/firebaseConfig';

type ProfileScreenRouteProp = RouteProp<PrivateStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'Profile'>;

type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { userInfo } = useAuthContext();

  return (
    <Container>
      <Flex direction={'row'} alignItems={'center'}>
        <IconButton
          zIndex={1}
          position={'absolute'}
          size={'lg'}
          onPress={() => navigation.goBack()}
          icon={<ArrowBackIcon />}
          _icon={{
            color: 'white',
          }}
        />
        <Heading size={'md'} flex={1} my={5} textAlign={'center'}>
          Профиль
        </Heading>
      </Flex>

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
