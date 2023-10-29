import { AuthStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '@components/screens/public/LoginScreen';
import { RegisterScreen } from '@components/screens/public/RegisterScreen';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
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
