import React, { createContext, useContext } from 'react';

type AuthContextType = {
    login: (data: any) => void;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider: React.FC = props => {
  const login = (data: any) => {
    console.log('login', data);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
