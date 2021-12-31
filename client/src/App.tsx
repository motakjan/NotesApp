import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WithLayout } from './components/Layout/WithLayout';
import { Authentication } from './pages/Authentication';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/login" 
                element={<Authentication />} 
            />
            <Route 
                path="/dashboard" 
                element={<WithLayout page={<Dashboard />} />} 
            />
            <Route 
                path="*" 
                element={<WithLayout page={<div>NOT FOUND</div>} />} 
            />
        </Routes>
    </BrowserRouter>
);
