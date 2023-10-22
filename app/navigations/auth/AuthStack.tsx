import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../../components/screens/LoginScreen';
import { RegisterScreen } from '../../components/screens/RegisterScreen';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name={'Register'}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
