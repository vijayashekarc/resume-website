import React from 'react';
import { Container, Box } from '@mui/material';
import Profile from '../components/Profile';
import CurrentStack from '../components/CurrentStack';
import CoreSkills from '../components/CoreSkills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import LeetCodeProgress from '../components/LeetCodeProgress';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Profile />
        <Experience />
        <CurrentStack />
        <CoreSkills />
        <LeetCodeProgress />
        <Education />
        <Projects />
      </Container>
      <Contact />
    </Box>
  );
};

export default Home;
