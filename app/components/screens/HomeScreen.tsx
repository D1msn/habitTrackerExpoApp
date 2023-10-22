import { Text } from 'react-native';
import { Button } from 'native-base';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <>
      <Text>Main</Text>
      <Button onPress={() => navigation.navigate('Auth')}>Go Auth</Button>
    </>
  );
};
