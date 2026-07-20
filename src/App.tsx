import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import CoreSkills from './components/CoreSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import LeetCodeProgress from './components/LeetCodeProgress';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A1A1A', // Anthropic-style dark color
    },
    secondary: {
      main: '#D4C5B9', // Muted earthy accent (sand/terracotta vibe)
    },
    background: {
      default: '#FAF9F6', // Warm off-white
      paper: '#FFFFFF',   // Pure white for components
    },
    text: {
      primary: '#1A1A1A', // Nearly black
      secondary: '#666666', // Deep gray
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      color: '#1A1A1A',
      fontWeight: 700,
    },
    h2: {
      color: '#1A1A1A',
      fontWeight: 600,
    },
    h3: {
      color: '#1A1A1A',
      fontWeight: 500,
    },
    h4: {
      color: '#1A1A1A',
      fontWeight: 500,
    },
    h5: {
      color: '#1A1A1A',
      fontWeight: 500,
    },
    h6: {
      color: '#1A1A1A',
      fontWeight: 500,
    },
    body1: {
      color: '#1A1A1A',
    },
    body2: {
      color: '#666666',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxShadow: 'none',
          borderRadius: '4px',
          transition: 'border-color 0.2s ease',
          '&:hover': {
            borderColor: '#CCCCCC',
            transform: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/resume-website">
        <div style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '64px',
          backgroundColor: '#FAF9F6',
        }}>
          <Header />
          <Profile />
          <Experience />
          <CoreSkills />
          <Education />
          <LeetCodeProgress />
          <Projects />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
