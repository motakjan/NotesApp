import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WithLayout } from './components/Layout/WithLayout';
import { Authentication } from './pages/Authentication/Authentication';
import { Dashboard } from './pages/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AddTask } from './pages/AddTask/AddTask';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Authentication />} />
      <Route path="/dashboard" element={<WithLayout page={<Dashboard />} />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/add_task/:boardId" element={<WithLayout page={<AddTask />} />} />
      <Route path="/join_task" element={<WithLayout page={<div>join_task</div>} />} />
      <Route path="*" element={<WithLayout page={<div>NOT FOUND</div>} />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);
