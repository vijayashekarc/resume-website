import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material';

interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode as 'light' | 'dark') || 'light';
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light Mode
                primary: { main: '#1A1A1A' },
                secondary: { main: '#D4C5B9' },
                background: {
                  default: '#FAF9F6',
                  paper: '#FFFFFF',
                },
                text: {
                  primary: '#1A1A1A',
                  secondary: '#666666',
                },
                divider: '#E5E5E5',
                action: {
                  hover: '#F9F9F9',
                  selected: '#EAEAEA',
                }
              }
            : {
                // Dark Mode
                primary: { main: '#FFFFFF' },
                secondary: { main: '#D4C5B9' },
                background: {
                  default: '#121212',
                  paper: '#1E1E1E',
                },
                text: {
                  primary: '#FFFFFF',
                  secondary: '#A0A0A0',
                },
                divider: 'rgba(255, 255, 255, 0.12)',
                action: {
                  hover: 'rgba(255, 255, 255, 0.05)',
                  selected: 'rgba(255, 255, 255, 0.08)',
                }
              }),
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 600 },
          h3: { fontWeight: 500 },
          h4: { fontWeight: 500 },
          h5: { fontWeight: 500 },
          h6: { fontWeight: 500 },
          button: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: ({ theme }) => ({
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                borderRadius: '4px',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
                '&:hover': {
                  borderColor: mode === 'light' ? '#CCCCCC' : 'rgba(255, 255, 255, 0.24)',
                  transform: 'none',
                  boxShadow: 'none',
                },
              }),
            },
          },
          MuiChip: {
            styleOverrides: {
              root: ({ theme }) => ({
                backgroundColor: mode === 'light' ? '#F5F5F5' : 'rgba(255,255,255,0.08)',
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#EAEAEA' : 'rgba(255,255,255,0.16)',
                }
              })
            }
          },
          MuiAvatar: {
            styleOverrides: {
              root: ({ theme }) => ({
                backgroundColor: mode === 'light' ? '#FFFFFF' : 'rgba(255,255,255,0.05)',
              })
            }
          },
          MuiDivider: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderColor: theme.palette.divider,
              })
            }
          },
          MuiButton: {
            styleOverrides: {
              contained: ({ theme }) => ({
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.paper,
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#333333' : '#E0E0E0',
                }
              }),
              outlined: ({ theme }) => ({
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)',
                }
              })
            }
          }
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
