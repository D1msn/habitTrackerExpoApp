import {StatusBar} from 'expo-status-bar';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NativeBaseProvider} from "native-base";
import {AuthScreen} from "./app/components/screens/AuthScreen";
import {MainScreen} from "./app/components/screens/MainScreen";

const Stack = createStackNavigator()

export default function App() {
  return (
      <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name={'auth'} component={AuthScreen}/>
          <Stack.Screen name={'main'} component={MainScreen}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
        </SafeAreaProvider>
      </NavigationContainer>
      </NativeBaseProvider>
  );
}
