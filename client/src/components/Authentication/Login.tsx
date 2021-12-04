type LoginPropsType = {
    login: () => void;
};

export const Login: React.FC<LoginPropsType> = ({ login }) => {
    const data = 'test';
    return (
        <div>
            {data}
            <button onClick={login}>Login</button>
        </div>
    );
};
