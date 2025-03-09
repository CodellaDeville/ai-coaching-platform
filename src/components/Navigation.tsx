import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Book,
  Psychology,
  TrendingUp,
  Settings,
} from '@mui/icons-material';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <Dashboard /> },
    { path: '/journal', label: 'Journal', icon: <Book /> },
    { path: '/coaching', label: 'Coaching', icon: <Psychology /> },
    { path: '/development', label: 'Development', icon: <TrendingUp /> },
    { path: '/settings', label: 'Settings', icon: <Settings /> },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: { xs: 1, sm: 0 }, 
            mr: { sm: 4 },
            color: theme.palette.text.primary,
          }}
        >
          AI Coach
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              startIcon={item.icon}
              onClick={() => navigate(item.path)}
              sx={{
                color: location.pathname === item.path 
                  ? theme.palette.primary.main 
                  : theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
