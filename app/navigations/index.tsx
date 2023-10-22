import { useAuth } from '../hooks/useAuth';
import { PrivateStack } from './private/PrivateStack';
import { AuthStack } from './auth/AuthStack';

export default function RootNavigation() {
  const { user } = useAuth();

  return user ? <PrivateStack /> : <AuthStack />;
}
