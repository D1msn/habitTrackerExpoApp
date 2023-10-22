import { Button, Heading, Input, Spinner, Stack } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigations/types';

type RegisterScreenRouteProp = RouteProp<AuthStackParamList, 'Register'>;
type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;

type RegisterScreenProps = {
  route: RegisterScreenRouteProp;
  navigation: RegisterScreenNavigationProp;
};

export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const singUp = async () => {
    if (password !== password2) {
      alert('Пароли не совпадают');
      return;
    }
    if (!password.length || !password2.length) {
      alert('Введите пароль');
      return;
    }

    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
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
          Регистрация
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
          <Input
            secureTextEntry
            onChangeText={setPassword2}
            value={password2}
            variant="rounded"
            placeholder="Пароль"
          />
        </Stack>

        <Stack space={'sm'}>
          <Button colorScheme={'amber'} onPress={singUp}>
            Зарегистрироваться
          </Button>
          <Button variant={'outline'} onPress={() => navigation.navigate('Login')}>
            Войти
          </Button>
        </Stack>

        {isLoading && <Spinner mt={10} size={'lg'} accessibilityLabel="Loading..." />}
      </Stack>
    </SafeAreaView>
  );
};
