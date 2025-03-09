interface ThemeConfig {
  darkMode: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    customizable: boolean;
  };
}

interface CoachingConfig {
  frameworks: string[];
  sessionTypes: ('ai' | 'human' | 'hybrid')[];
  progressTracking: {
    metrics: string[];
    visualizations: string[];
  };
}

interface JournalingConfig {
  templates: {
    daily: boolean;
    weekly: boolean;
    leadership: boolean;
    custom: boolean;
  };
  features: {
    moodTracking: boolean;
    energyLevels: boolean;
    tagging: boolean;
    search: boolean;
    encryption: boolean;
  };
}

interface DevelopmentConfig {
  assessments: {
    skills: boolean;
    personality: boolean;
    leadership: boolean;
  };
  planning: {
    customizable: boolean;
    templates: boolean;
    goalSetting: boolean;
  };
  resources: {
    articles: boolean;
    exercises: boolean;
    templates: boolean;
  };
}

interface SecurityConfig {
  encryption: {
    enabled: boolean;
    type: 'end-to-end';
    algorithm: string;
  };
  compliance: {
    gdpr: boolean;
    ccpa: boolean;
    hipaa: boolean;
  };
  dataRetention: {
    customizable: boolean;
    defaultDays: number;
    minDays: number;
    maxDays: number;
  };
  anonymousMode: {
    enabled: boolean;
    features: string[];
  };
}

interface OnboardingConfig {
  steps: string[];
  tutorial: {
    interactive: boolean;
    skipable: boolean;
    sections: string[];
  };
}

interface PlatformConfig {
  theme: ThemeConfig;
  features: {
    coaching: CoachingConfig;
    journaling: JournalingConfig;
    development: DevelopmentConfig;
    notifications: {
      push: boolean;
      email: boolean;
      inApp: boolean;
      scheduling: {
        reminders: boolean;
        checkIns: boolean;
        milestones: boolean;
      };
    };
    calendar: {
      integration: boolean;
      providers: string[];
      features: {
        scheduling: boolean;
        reminders: boolean;
        availability: boolean;
      };
    };
    social: {
      accountability: {
        partners: boolean;
        groups: boolean;
        private: boolean;
      };
      sharing: {
        goals: boolean;
        milestones: boolean;
        insights: boolean;
      };
    };
    humanCoach: {
      matching: {
        algorithm: boolean;
        specialization: boolean;
        preferences: boolean;
      };
      sessions: {
        video: boolean;
        audio: boolean;
        chat: boolean;
        scheduling: boolean;
        recurring: boolean;
      };
      preparation: {
        questionnaires: boolean;
        goals: boolean;
        notes: boolean;
      };
    };
  };
  security: SecurityConfig;
  onboarding: OnboardingConfig;
}

export const platformConfig: PlatformConfig = {
  theme: {
    darkMode: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      accent: '#6200ee',
      text: '#ffffff',
      customizable: true
    }
  },
  features: {
    coaching: {
      frameworks: ['leadership', 'organizational', 'personal'],
      sessionTypes: ['ai', 'human', 'hybrid'],
      progressTracking: {
        metrics: ['goals', 'skills', 'habits'],
        visualizations: ['charts', 'dashboards', 'timelines']
      }
    },
    journaling: {
      templates: {
        daily: true,
        weekly: true,
        leadership: true,
        custom: true
      },
      features: {
        moodTracking: true,
        energyLevels: true,
        tagging: true,
        search: true,
        encryption: true
      }
    },
    development: {
      assessments: {
        skills: true,
        personality: true,
        leadership: true
      },
      planning: {
        customizable: true,
        templates: true,
        goalSetting: true
      },
      resources: {
        articles: true,
        exercises: true,
        templates: true
      }
    },
    notifications: {
      push: true,
      email: true,
      inApp: true,
      scheduling: {
        reminders: true,
        checkIns: true,
        milestones: true
      }
    },
    calendar: {
      integration: true,
      providers: ['google', 'outlook', 'apple'],
      features: {
        scheduling: true,
        reminders: true,
        availability: true
      }
    },
    social: {
      accountability: {
        partners: true,
        groups: true,
        private: true
      },
      sharing: {
        goals: true,
        milestones: true,
        insights: true
      }
    },
    humanCoach: {
      matching: {
        algorithm: true,
        specialization: true,
        preferences: true
      },
      sessions: {
        video: true,
        audio: true,
        chat: true,
        scheduling: true,
        recurring: true
      },
      preparation: {
        questionnaires: true,
        goals: true,
        notes: true
      }
    }
  },
  security: {
    encryption: {
      enabled: true,
      type: 'end-to-end',
      algorithm: 'AES-256-GCM'
    },
    compliance: {
      gdpr: true,
      ccpa: true,
      hipaa: true
    },
    dataRetention: {
      customizable: true,
      defaultDays: 365,
      minDays: 30,
      maxDays: 730
    },
    anonymousMode: {
      enabled: true,
      features: ['journaling', 'development', 'resources']
    }
  },
  onboarding: {
    steps: [
      'welcome',
      'assessment',
      'goals',
      'coachMatch',
      'tutorial'
    ],
    tutorial: {
      interactive: true,
      skipable: true,
      sections: [
        'interface',
        'features',
        'coaching',
        'journaling',
        'development'
      ]
    }
  }
};
