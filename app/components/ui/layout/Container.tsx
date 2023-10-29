import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={{ flex: 1, padding: 15 }}>{children}</SafeAreaView>;
};
