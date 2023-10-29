import { useAuth } from '@hooks/useAuth';
import { PrivateStack } from './private/PrivateStack';
import { AuthStack } from './auth/AuthStack';
import React from 'react';
import { AuthContextProvider } from '../providers/AuthProvider/AuthContextProvider';

export default function RootNavigation() {
  const { user } = useAuth();

  return user ? (
    <AuthContextProvider user={user}>
      <PrivateStack />
    </AuthContextProvider>
  ) : (
    <AuthStack />
  );
}
