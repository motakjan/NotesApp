import Button from '@mui/material/Button';

type LoginPropsType = {
    login: () => void;
};

export const Login: React.FC<LoginPropsType> = ({ login }) => {
    const data = 'test';
    return (
        <div>
            {data}
            <Button 
                variant="contained" 
                onClick={login}
            >
                Login
            </Button>
        </div>
    );
};
