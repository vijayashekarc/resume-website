import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CoreSkills: React.FC = () => {
  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
    { category: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Material-UI'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'SQL'] },
    { category: 'Tools & Technologies', items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        Core Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          '& > *': {
            flex: '1 1 300px',
            minWidth: '300px',
            animation: `${fadeIn} 1s ease-out`,
            animationFillMode: 'both',
          },
        }}
      >
        {skills.map((skillGroup, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              animationDelay: `${index * 0.2}s`,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              {skillGroup.category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skillGroup.items.map((skill, skillIndex) => (
                <Typography
                  key={skillIndex}
                  variant="body2"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CoreSkills; 