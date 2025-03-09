import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material';
import { useThemePreferences } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../contexts/NotificationContext';

const Settings: React.FC = () => {
  const { darkMode, toggleDarkMode, accentColor, setAccentColor } = useThemePreferences();
  const { user, updateUserPreferences } = useAuth();
  const { showNotification, requestPushPermission } = useNotifications();

  const handleCoachingStyleChange = async (style: string) => {
    try {
      await updateUserPreferences({ coachingStyle: style });
      showNotification('success', 'Coaching style updated successfully');
    } catch (error) {
      showNotification('error', 'Failed to update coaching style');
    }
  };

  const handleNotificationToggle = async () => {
    try {
      await requestPushPermission();
      await updateUserPreferences({
        notifications: !user?.preferences?.notifications,
      });
    } catch (error) {
      showNotification('error', 'Failed to update notification settings');
    }
  };

  const handleAnonymousModeToggle = async () => {
    try {
      await updateUserPreferences({
        anonymousMode: !user?.preferences?.anonymousMode,
      });
      showNotification('success', 'Anonymous mode setting updated');
    } catch (error) {
      showNotification('error', 'Failed to update anonymous mode');
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Appearance Settings */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Appearance
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    color="primary"
                  />
                }
                label="Dark Mode"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Accent Color"
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                sx={{ input: { cursor: 'pointer' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Coaching Preferences */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Coaching Preferences
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Coaching Style</InputLabel>
                <Select
                  value={user?.preferences?.coachingStyle || 'directive'}
                  onChange={(e) => handleCoachingStyleChange(e.target.value)}
                  label="Coaching Style"
                >
                  <MenuItem value="directive">Directive</MenuItem>
                  <MenuItem value="non-directive">Non-Directive</MenuItem>
                  <MenuItem value="mixed">Mixed Approach</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Privacy & Security
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={user?.preferences?.anonymousMode || false}
                    onChange={handleAnonymousModeToggle}
                    color="primary"
                  />
                }
                label="Anonymous Mode"
              />
              <Typography variant="body2" color="textSecondary">
                Hide your identity from other users and coaches
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mb: 2 }}>
                All journal entries are automatically end-to-end encrypted
              </Alert>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => showNotification('info', 'Data export started')}
              >
                Export My Data
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={user?.preferences?.notifications || false}
                    onChange={handleNotificationToggle}
                    color="primary"
                  />
                }
                label="Push Notifications"
              />
              <Typography variant="body2" color="textSecondary">
                Receive notifications for upcoming sessions and milestones
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
