import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createAppTheme } from './theme/theme';

// Core components
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import JournalSystem from './pages/JournalSystem';
import CoachingHub from './pages/CoachingHub';
import Development from './pages/Development';
import Settings from './pages/Settings';

// Context providers
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemePreferencesProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [accentColor, setAccentColor] = useState('#6200ee');
  const theme = createAppTheme(darkMode, accentColor);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <NotificationProvider>
          <ThemePreferencesProvider>
            <BrowserRouter>
              <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navigation />
                <main style={{ flex: 1, backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5', padding: '20px' }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/journal/*" element={<JournalSystem />} />
                    <Route path="/coaching/*" element={<CoachingHub />} />
                    <Route path="/development/*" element={<Development />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </BrowserRouter>
          </ThemePreferencesProvider>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
