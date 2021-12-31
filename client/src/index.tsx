import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ColorModeContextProvider } from './context/ColorModeContext';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ColorModeContextProvider>
            <App />
        </ColorModeContextProvider>
    </QueryClientProvider>,
    document.getElementById('root')
);
