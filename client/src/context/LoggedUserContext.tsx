import { AxiosError } from 'axios';
import React, { useContext, createContext } from 'react';
import { useQuery } from 'react-query';
import { authApi } from '../api/auth';

export interface ILoggedUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
}

type LoggedUserContextType = {
  status?: string;
  isLoading?: boolean;
  loggedUser?: ILoggedUser;
  isLoggedIn: boolean;
};

export const LoggedUserContext = createContext<LoggedUserContextType>({
  status: 'error',
  isLoading: false,
  loggedUser: undefined,
  isLoggedIn: false,
});

export const useLoggedUser = () => useContext(LoggedUserContext);

export const LoggedUserContextProvider: React.FC = props => {
  const { data, status, isLoading } = useQuery<{ isLoggedIn: boolean; loggedUser: ILoggedUser; errors: AxiosError }>(
    'isLoggedIn',
    authApi.isLoggedIn,
    {
      retry: false,
    }
  );

  // Context Values
  const contextValue: LoggedUserContextType = {
    status,
    isLoading,
    loggedUser: data?.loggedUser,
    isLoggedIn: data?.isLoggedIn || false,
  };

  return <LoggedUserContext.Provider value={contextValue}>{props.children}</LoggedUserContext.Provider>;
};
