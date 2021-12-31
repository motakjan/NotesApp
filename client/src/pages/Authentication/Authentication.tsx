import { authApi } from '../../api/auth';
import { AxiosError } from 'axios';
import { GetAuthResType, LoginDataType } from '../../types/authTypes';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { Login } from '../../components/Authentication/Login';
import { GradientBox } from '../../components/UI/GradientBox/GradientBox';

export const Authentication = () => {
    const { data, mutate, status } = useMutation<
        GetAuthResType,
        AxiosError,
        LoginDataType
    >('login', authApi.loginUser);

    useEffect(() => {
        data && localStorage.setItem('auth-token', data.jwtToken);
    }, [data]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginFormData = new FormData(event.currentTarget);
 
        console.log({
            email: loginFormData.get('email'),
            password: loginFormData.get('password'),
        });

        const staticData = {
            email: 'teset@tetete.cz',
            password: 'Jedoma1234',
        };
        mutate(staticData); 
    };

    return (
        <GradientBox 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {status}
            <Login login={onSubmit} />
        </GradientBox>
    );
};
