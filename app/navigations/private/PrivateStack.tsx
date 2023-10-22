import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../components/screens/HomeScreen';
import { PrivateStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<PrivateStackParamList>();

export const PrivateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
