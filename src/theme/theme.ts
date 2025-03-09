import { Theme, ThemeOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger: string;
    };
  }
}

export const createAppTheme = (darkMode: boolean, accentColor: string) => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: accentColor,
      },
      background: {
        default: darkMode ? '#1a1a1a' : '#ffffff',
        paper: darkMode ? '#2d2d2d' : '#f5f5f5',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
