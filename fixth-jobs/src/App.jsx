import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailPage from './pages/JobDetailPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.landing} element={<LandingPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.signup} element={<SignUpPage />} />
      <Route path={ROUTES.jobs} element={<JobListingsPage />} />
      <Route path="/jobs/:jobId" element={<JobDetailPage />} />
      <Route path="*" element={<Navigate to={ROUTES.landing} replace />} />
    </Routes>
  );
}
