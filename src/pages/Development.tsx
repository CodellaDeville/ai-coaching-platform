import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
  LibraryBooks as LibraryIcon,
  CheckCircle as CheckIcon,
  Star as SkillIcon,
} from '@mui/icons-material';

interface Skill {
  name: string;
  level: number;
  targetLevel: number;
  category: string;
}

interface Resource {
  id: string;
  title: string;
  type: 'article' | 'exercise' | 'template';
  tags: string[];
  completed: boolean;
}

const Development: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [skills, setSkills] = useState<Skill[]>([
    { name: 'Strategic Thinking', level: 7, targetLevel: 9, category: 'Leadership' },
    { name: 'Team Management', level: 6, targetLevel: 8, category: 'Leadership' },
    { name: 'Communication', level: 8, targetLevel: 9, category: 'Soft Skills' },
    { name: 'Decision Making', level: 7, targetLevel: 9, category: 'Leadership' },
  ]);

  const [resources, setResources] = useState<Resource[]>([
    {
      id: '1',
      title: 'Strategic Leadership Framework',
      type: 'template',
      tags: ['leadership', 'strategy'],
      completed: false,
    },
    {
      id: '2',
      title: 'Effective Team Communication',
      type: 'exercise',
      tags: ['communication', 'team'],
      completed: true,
    },
  ]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const SkillAssessment = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Current Skill Levels
      </Typography>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill.name}>
            <ListItemIcon>
              <SkillIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={skill.name}
              secondary={
                <Box sx={{ mt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(skill.level / 10) * 100}
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    Current: {skill.level}/10 • Target: {skill.targetLevel}/10
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AssessmentIcon />}
        sx={{ mt: 2 }}
      >
        Take New Assessment
      </Button>
    </Box>
  );

  const DevelopmentPlan = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Your Development Plan
      </Typography>
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Current Focus Areas
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {skills
              .filter((skill) => skill.targetLevel > skill.level)
              .map((skill) => (
                <Chip
                  key={skill.name}
                  label={skill.name}
                  color="primary"
                  variant="outlined"
                />
              ))}
          </Box>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<TimelineIcon />}
          >
            Adjust Goals
          </Button>
        </CardContent>
      </Card>
      
      <Typography variant="subtitle1" gutterBottom>
        Recommended Actions
      </Typography>
      <List>
        {/* Add recommended actions based on development plan */}
      </List>
    </Box>
  );

  const ResourceLibrary = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Resource Library
      </Typography>
      <Grid container spacing={2}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} key={resource.id}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1">{resource.title}</Typography>
                  {resource.completed && <CheckIcon color="success" />}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip
                    size="small"
                    label={resource.type}
                    color="primary"
                    variant="outlined"
                  />
                  {resource.tags.map((tag) => (
                    <Chip key={tag} size="small" label={tag} />
                  ))}
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  {resource.completed ? 'Review Again' : 'Start Learning'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Personal Development
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ mb: 3 }}
      >
        <Tab icon={<AssessmentIcon />} label="Skills" />
        <Tab icon={<TimelineIcon />} label="Development Plan" />
        <Tab icon={<LibraryIcon />} label="Resources" />
      </Tabs>

      {activeTab === 0 && <SkillAssessment />}
      {activeTab === 1 && <DevelopmentPlan />}
      {activeTab === 2 && <ResourceLibrary />}
    </Box>
  );
};

export default Development;
