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
      main: '#1a73e8', // Google Blue
    },
    secondary: {
      main: '#9c27b0', // Soft purple
    },
    background: {
      default: '#f8f9fa',
      paper: 'rgba(255, 255, 255, 0.7)',
    },
    text: {
      primary: '#202124',    // Dark gray for high readability
      secondary: '#5f6368',  // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      color: '#202124',
      fontWeight: 600,
    },
    h2: {
      color: '#202124',
      fontWeight: 600,
    },
    h3: {
      color: '#202124',
      fontWeight: 500,
    },
    h4: {
      color: '#202124',
      fontWeight: 500,
    },
    h5: {
      color: '#1a73e8',
      fontWeight: 500,
    },
    h6: {
      color: '#202124',
      fontWeight: 500,
    },
    body1: {
      color: '#202124',
    },
    body2: {
      color: '#5f6368',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
      <Router basename="/AboutMe">
        <div style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '64px', // Space for the fixed header
          // Brighter Gemini-like subtle 4-color gradient (Blue, Red, Yellow, Green)
          background: 'linear-gradient(135deg, rgba(66,133,244,0.12) 0%, rgba(234,67,53,0.1) 33%, rgba(251,188,5,0.12) 66%, rgba(52,168,83,0.1) 100%)',
        }}>
          <Header />
          <Profile />
          <CoreSkills />
          <Education />
          <Experience />
          <LeetCodeProgress />
          <Projects />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
