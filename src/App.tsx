import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import CoreSkills from './components/CoreSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import LeetCodeProgress from './components/LeetCodeProgress';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#7ed98b',
    },
    background: {
      default: '#132547',
      paper: '#822b72',
    },
    text: {
      primary: '#ffffff',    // White text for main content
      secondary: '#c6c3d6',  // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#ffffff',
    },
    h2: {
      color: '#ffffff',
    },
    h3: {
      color: '#ffffff',
    },
    h4: {
      color: '#00ff26',
    },
    h5: {
      color: '#a89bf2',
    },
    h6: {
      color: '#ffffff',
    },
    body1: {
      color: '#ffffff',
    },
    body2: {
      color: '#000000',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
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
          background: 'linear-gradient(135deg,rgb(43, 28, 79) 20%,rgb(255, 255, 255) 100%)' // Gradient background
        }}>
          <Header />
          <Profile />
          <CoreSkills />
          <LeetCodeProgress />
          <Experience />
          <Education />
          <Projects />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
