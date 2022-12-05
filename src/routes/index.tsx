import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/start-page"
        element={
          <Button variant="contained" color="primary">
            Test
          </Button>
        }
      />
      {/* <Route path="/start-page" element={<p>Start page</p>} /> */}
      <Route path="*" element={<Navigate to="/start-page" />} />
    </Routes>
  );
};
