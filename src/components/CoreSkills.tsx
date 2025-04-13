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
    { category: 'Programming Languages', items: ['Python - Proficient','JAVA', 'JavaScript', 'C - Language','Dart (Flutter)'] },
    { category: 'Frontend & Backend', items: ['React', 'HTML5', 'CSS', 'Material-UI','Node.js', 'Express.js','Flask'] },
    { category: 'Database', items: ['SQL' , 'Supabase','MongoDB'] },
    { category: 'Tools & Technologies', items: ['Git','Linux', 'Google AI Studio', 'Google Cloud Platform','Flutter',] },
    { category: 'AI Tools', items: ['GitHub Copilot','Gemini API','Tensor Flow','Jupyter Notebook','Cursor AI'] },
    { category: 'Experienced IDE', items: ['Visual Studio Code','IntelliJ IDEA','Android Studio',] },
    
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
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.54)',
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