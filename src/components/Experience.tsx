import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
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

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Competitive Programming Lead',
      company: 'Microsoft Learn Student Chapter KARE',
      duration: 'Jul 2024 - Present',
      description: [
        '- Contributed new problem statements for the hackathons.',
        '- Organized hackathons and workshops effectively.',
        '- Designed posters and flyers for multiple events.'
      ],
    },
    
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
        Experience
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WorkIcon 
                sx={{ 
                  mr: 1,
                  color: 'primary.main',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }} 
              />
              <Box>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.company} | {exp.duration}
                </Typography>
              </Box>
            </Box>
            <Box component="ul" sx={{ margin: 0, paddingLeft: '20px' }}>
              {exp.description.map((item, idx) => (
                <Box 
                  component="li" 
                  key={idx}
                  sx={{
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  <Typography variant="body1">{item}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Experience; 