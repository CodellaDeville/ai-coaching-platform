import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Dialog,
} from '@mui/material';
import {
  VideoCall as VideoCallIcon,
  Chat as ChatIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

interface CoachSession {
  id: string;
  type: 'ai' | 'human' | 'hybrid';
  status: 'scheduled' | 'completed' | 'cancelled';
  date: Date;
  coachName?: string;
  focus: string;
}

interface SessionCardProps {
  session: CoachSession;
}

const CoachingHub: React.FC = () => {
  const [sessions, setSessions] = useState<CoachSession[]>([]);
  const [showBooking, setShowBooking] = useState(false);

  const handleBookSession = () => {
    setShowBooking(true);
  };

  const ConnectWithCoachButton = () => (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<PersonIcon />}
      onClick={handleBookSession}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        borderRadius: '24px',
        padding: '12px 24px',
        boxShadow: '0 4px 12px rgba(98, 0, 238, 0.2)',
      }}
    >
      Connect with Coach
    </Button>
  );

  const SessionCard: React.FC<SessionCardProps> = ({ session }) => (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              {session.type.charAt(0).toUpperCase() + session.type.slice(1)} Session
            </Typography>
            <Typography color="textSecondary">
              {session.coachName || 'AI Coach'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end" gap={1}>
              <IconButton color="primary">
                <VideoCallIcon />
              </IconButton>
              <IconButton color="primary">
                <ChatIcon />
              </IconButton>
              <IconButton color="primary">
                <CalendarIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Coaching Hub
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Your Coaching Journey
          </Typography>
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Actions
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ChatIcon />}
                sx={{ mb: 2 }}
              >
                Start AI Session
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<CalendarIcon />}
                onClick={handleBookSession}
              >
                Schedule Session
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <ConnectWithCoachButton />

      <Dialog
        open={showBooking}
        onClose={() => setShowBooking(false)}
        maxWidth="md"
        fullWidth
      >
        {/* Booking dialog content will be implemented here */}
      </Dialog>
    </Box>
  );
};

export default CoachingHub;
