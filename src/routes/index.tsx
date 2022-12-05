import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/start-page"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        }
      />
      {/* <Route path="/start-page" element={<p>Start page</p>} /> */}
      <Route path="*" element={<Navigate to="/start-page" />} />
    </Routes>
  );
};
