import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import RootNavigation from './app/navigations';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <RootNavigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
