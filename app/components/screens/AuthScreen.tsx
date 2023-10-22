import { Text } from 'react-native';
import { Button } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type AuthScreenRouteProp = RouteProp<RootStackParamList, 'Auth'>;
type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

type AuthScreenProps = {
  route: AuthScreenRouteProp;
  navigation: AuthScreenNavigationProp;
};

export const AuthScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <>
      <Text>Auth</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go main</Button>
    </>
  );
};
