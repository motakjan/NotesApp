import Box from '@mui/material/Box';
import { Authentication } from './pages/Authentication';
import GoogleIcon from '@mui/icons-material/Google';
import { LoginWithButton } from './components/UI/LoginWithButton/LoginWithButton';

export const App: React.FC = () => (
    <Box
        sx={{
            width: '100%',
        }}
    >
            Ratione excepturi quos molestiae libero dolores veniam mollitia
            repudiandae nostrum reiciendis vero, magnam iure rem harum provident
            non! Sunt consectetur fugiat excepturi, autem laboriosam saepe
            aspernatur, ut iure fugit doloribus earum esse rem, vitae itaque
            cumque sint. Id in vitae rerum, iusto deserunt alias. Molestias
            rerum est placeat. Quidem iusto et voluptas dolor similique porro
            vel enim minus, omnis iste nobis illum voluptatum, nihil corrupti
            id. Neque, quidem labore. Rerum non optio laboriosam, sed
            praesentium voluptatum ipsa dignissimos! Quia voluptates quae ipsum
            repellat quo. Porro officia non perspiciatis nam velit deleniti quae
            asperiores temporibus iste voluptatibus, facilis minima nostrum
            vitae? Pariatur eveniet magni dolorum itaque vero consequatur quae.
            Expedita, quaerat adipisci sapiente magni est cumque commodi nihil,
            ab numquam officiis non quasi veniam quibusdam error. Fugiat
            voluptas dolor magnam optio aspernatur ipsum. Ad fugiat debitis
            eligendi consequuntur dolores. Sint unde maxime perferendis, nobis
            magni, ipsam libero ex quae dignissimos commodi ut ab velit suscipit
            illum cumque pariatur! Necessitatibus delectus maiores ut numquam.
            Error cupiditate debitis quam cumque voluptatibus.
        <Authentication />
        <LoginWithButton 
            icon={ <GoogleIcon /> } 
            text="Continue with Google account" 
            type="google"
            color="blue"
        />
    </Box>
);

