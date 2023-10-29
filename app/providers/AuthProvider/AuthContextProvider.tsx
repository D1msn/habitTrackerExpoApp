import React, { createContext, useContext } from 'react';
import { User } from '@firebase/auth';
import { Spinner } from 'native-base';

type authContextType = {
  userInfo: User;
};

const defaultContextValue: authContextType = {
  userInfo: {} as User,
};

export const AuthContext = createContext(defaultContextValue);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) => {
  return (
    <>
      {user ? (
        <AuthContext.Provider
          value={{
            userInfo: user,
          }}>
          {children}
        </AuthContext.Provider>
      ) : (
        <Spinner top={'50%'} size={'lg'} />
      )}
    </>
  );
};
