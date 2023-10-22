import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { LoginScreen } from './app/components/screens/LoginScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import { User } from '@firebase/auth';
import { RegisterScreen } from './app/components/screens/RegisterScreen';
import { AuthStackParamList } from './app/navigations/types';
import { PrivateLayout } from './app/navigations/private/PrivateLayout';

const Stack = createStackNavigator<AuthStackParamList>();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName={'Login'}>
            {!user ? (
              <>
                <Stack.Screen
                  name={'Login'}
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={'Register'}
                  component={RegisterScreen}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <Stack.Screen
                name={'Private'}
                component={PrivateLayout}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
