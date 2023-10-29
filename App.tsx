import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import RootNavigation from './app/navigations';
import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';
import { useOnlineManager } from '@hooks/useOnlineManager';
import { useAppState } from '@hooks/useAppState';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <RootNavigation />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
