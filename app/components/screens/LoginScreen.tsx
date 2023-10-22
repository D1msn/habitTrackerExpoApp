import { Button, Heading, Input, Spinner, Stack } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigations/types';

type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

type AuthScreenProps = {
  route: AuthScreenRouteProp;
  navigation: AuthScreenNavigationProp;
};

export const LoginScreen = ({ navigation }: AuthScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const singIn = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <Stack px={'15'}>
        <Heading mt={'5'} textAlign={'center'} size={'md'}>
          Авторизация
        </Heading>
        <Stack space={'xs'} my={50}>
          <Input onChangeText={setEmail} value={email} variant="rounded" placeholder="Email" />
          <Input
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            variant="rounded"
            placeholder="Пароль"
          />
        </Stack>
        <Stack space={'sm'}>
          <Button colorScheme={'amber'} variant={'solid'} onPress={singIn}>
            Войти
          </Button>
          <Button variant={'outline'} onPress={() => navigation.navigate('Register')}>
            Зарегистрироваться
          </Button>
        </Stack>
        {isLoading && <Spinner mt={10} size={'lg'} accessibilityLabel="Loading..." />}
      </Stack>
    </SafeAreaView>
  );
};
