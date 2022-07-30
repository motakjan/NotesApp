import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ColorModeContextProvider } from './context/ColorModeContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ColorModeContextProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}>
        <App />
      </GoogleOAuthProvider>
    </ColorModeContextProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
