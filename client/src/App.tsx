import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
        path="/"
        element={<Navigate to="/dashboard" />}
      />
      <Route
        path="/add_task"
        element={<WithLayout page={<div>add_task</div>} />}
      />
      <Route
        path="/join_task"
        element={<WithLayout page={<div>join_task</div>} />}
      />
      <Route 
        path="*" 
        element={<WithLayout page={<div>NOT FOUND</div>} />} 
      />
    </Routes>
  </BrowserRouter>
);
