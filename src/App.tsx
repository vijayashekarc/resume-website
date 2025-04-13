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
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
        <div>
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
