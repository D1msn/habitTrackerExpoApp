import { HomeScreen } from '@components/screens/private/HomeScreen';
import { PrivateStackParamList } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from '@components/screens/private/ProfileScreen';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HabitCreateScreen } from '@components/screens/private/habit/HabitCreateScreen';
import { HabitDetailScreen } from '@components/screens/private/habit/HabitDetailScreen';

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
        <Stack.Screen
          name={'HabitDetail'}
          component={HabitDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'HabitCreate'}
          component={HabitCreateScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
