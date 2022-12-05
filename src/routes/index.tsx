import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/start-page" element={<p>Start page</p>} />
      <Route path="*" element={<Navigate to="/start-page" />} />
    </Routes>
  );
};
