import { Button, Heading } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrivateStackParamList } from '../../navigations/types';
import { useAuth } from '../../hooks/useAuth';

type HomeScreenRouteProp = RouteProp<PrivateStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'Home'>;

type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { user } = useAuth();
  return (
    <SafeAreaView>
      <Heading my={5} textAlign={'center'}>
        {user?.email}
      </Heading>
      <Button variant={'outline'} onPress={() => FIREBASE_AUTH.signOut()}>
        Sign Out
      </Button>
    </SafeAreaView>
  );
};
