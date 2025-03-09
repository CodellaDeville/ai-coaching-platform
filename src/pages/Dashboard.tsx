import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  useTheme,
} from '@mui/material';
import {
  TrendingUp,
  AccessTime,
  EmojiEvents,
  Psychology,
} from '@mui/icons-material';

interface ProgressCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Box
          sx={{
            backgroundColor: `${color}20`,
            borderRadius: '50%',
            p: 1,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="body2" color="textSecondary">
            Progress
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {value}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            backgroundColor: `${color}20`,
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
      </Box>
    </CardContent>
  </Card>
);

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const progressCards = [
    {
      title: 'Personal Growth',
      value: 75,
      icon: <TrendingUp sx={{ color: '#4CAF50' }} />,
      color: '#4CAF50',
    },
    {
      title: 'Weekly Goals',
      value: 60,
      icon: <AccessTime sx={{ color: '#2196F3' }} />,
      color: '#2196F3',
    },
    {
      title: 'Achievements',
      value: 85,
      icon: <EmojiEvents sx={{ color: '#FFC107' }} />,
      color: '#FFC107',
    },
    {
      title: 'Coaching Sessions',
      value: 90,
      icon: <Psychology sx={{ color: '#9C27B0' }} />,
      color: '#9C27B0',
    },
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Welcome Back
      </Typography>

      <Grid container spacing={3}>
        {progressCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProgressCard {...card} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              {/* Activity list will be implemented here */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Sessions
              </Typography>
              {/* Session list will be implemented here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
