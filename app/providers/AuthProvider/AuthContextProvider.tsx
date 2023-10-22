import React, { createContext, useContext } from 'react';
import { User } from '@firebase/auth';
import { useAuth } from '../../hooks/useAuth';

type authContextType = {
  userInfo: User | undefined;
};

const defaultContextValue: authContextType = {
  userInfo: undefined,
};

const AuthContext = createContext(defaultContextValue);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        userInfo: user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
