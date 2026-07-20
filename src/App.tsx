import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Router basename="/resume-website">
        <Box 
          sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '64px',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
