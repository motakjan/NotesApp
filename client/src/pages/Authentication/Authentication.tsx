import { authApi } from '../../api/auth';
import { AxiosError } from 'axios';
import { GetAuthResType, LoginDataType } from '../../types/authTypes';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { Login } from '../../components/Authentication/Login';

export const Authentication = () => {
    const { data, mutate, status } = useMutation<
        GetAuthResType,
        AxiosError,
        LoginDataType
    >('login', authApi.loginUser);

    useEffect(() => {
        data && localStorage.setItem('auth-token', data.jwtToken);
    }, [data]);

    const onSubmit = () => {
        const staticData = {
            email: 'teset@tetete.cz',
            password: 'Jedoma1234',
        };
        mutate(staticData);
    };

    return (
        <>
            {status}
            <Login login={onSubmit} />
        </>
    );
};
