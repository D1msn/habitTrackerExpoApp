import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../components/screens/HomeScreen';
import { PrivateStackParamList } from '../types';

const PrivateStack = createStackNavigator<PrivateStackParamList>();

export const PrivateLayout = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name={'Home'} component={HomeScreen} options={{ headerShown: false }} />
    </PrivateStack.Navigator>
  );
};
