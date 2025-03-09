import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  IconButton,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Mood as MoodIcon,
  BatteryCharging90 as EnergyIcon,
  LocalOffer as TagIcon,
  Lock as LockIcon,
} from '@mui/icons-material';

interface JournalEntry {
  id: string;
  date: Date;
  content: string;
  mood: number;
  energy: number;
  tags: string[];
  template: string;
  isEncrypted: boolean;
}

const JournalSystem: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('daily');
  const [mood, setMood] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const templates = {
    daily: {
      prompts: [
        "What are your main goals for today?",
        "What challenges are you facing?",
        "What support do you need from your coach?",
      ],
    },
    leadership: {
      prompts: [
        "Describe a leadership challenge you encountered.",
        "How did you handle it?",
        "What did you learn from this experience?",
      ],
    },
    reflection: {
      prompts: [
        "What were your key achievements this week?",
        "What patterns did you notice in your behavior?",
        "What would you like to focus on next week?",
      ],
    },
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h5">New Journal Entry</Typography>
                <IconButton color="primary" title="End-to-end encrypted">
                  <LockIcon />
                </IconButton>
              </Box>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Template</InputLabel>
                <Select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value as string)}
                  label="Template"
                >
                  <MenuItem value="daily">Daily Reflection</MenuItem>
                  <MenuItem value="leadership">Leadership Challenge</MenuItem>
                  <MenuItem value="reflection">Weekly Reflection</MenuItem>
                </Select>
              </FormControl>

              {templates[selectedTemplate as keyof typeof templates].prompts.map((prompt, index) => (
                <TextField
                  key={index}
                  fullWidth
                  multiline
                  rows={4}
                  label={prompt}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              ))}

              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>Mood</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MoodIcon sx={{ mr: 2 }} />
                  <Slider
                    value={mood}
                    onChange={(_, value) => setMood(value as number)}
                    min={1}
                    max={10}
                    marks
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>Energy Level</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EnergyIcon sx={{ mr: 2 }} />
                  <Slider
                    value={energy}
                    onChange={(_, value) => setEnergy(value as number)}
                    min={1}
                    max={10}
                    marks
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>Tags</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => handleRemoveTag(tag)}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    size="small"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                  />
                  <Button
                    variant="outlined"
                    startIcon={<TagIcon />}
                    onClick={handleAddTag}
                  >
                    Add
                  </Button>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Save Entry
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Journal Stats
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Tracking your progress and patterns
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Weekly Entries
                </Typography>
                {/* Add visualization component here */}
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Mood Trends
                </Typography>
                {/* Add visualization component here */}
              </Box>

              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Common Themes
                </Typography>
                {/* Add tag cloud or similar visualization here */}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JournalSystem;
