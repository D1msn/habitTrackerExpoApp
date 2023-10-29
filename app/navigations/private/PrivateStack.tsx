import { HomeScreen } from '@components/screens/HomeScreen';
import { PrivateStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from '@components/screens/ProfileScreen';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator<PrivateStackParamList>();

export const PrivateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
