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
    { category: 'Programming Languages', items: ['Python (Proficient)','Java', 'JavaScript', 'C - Language'] },
    { category: 'AI Tools', items: ['Claude Code','Gemini API','Tensor Flow','Jupyter Notebook'] },
    { category: 'Frontend & Backend', items: ['Django','SpringBoot','Flask','React', 'Material-UI','Node.js', 'Express.js','HTML5', 'CSS',] },
    { category: 'Database', items: ['Postgress','SQL' ,'MongoDB'] },
    { category: 'Tools & Technologies', items: ['Version Control (Bitbucket / Github)','Ubuntu / Linux', 'AWS Cloud Services', 'Google AI Studio'] },
    { category: 'Experienced IDE', items: ["Antigravity",'Codex','Visual Studio Code','IntelliJ IDEA','Android Studio'] },
    
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
            elevation={0}
            sx={{
              p: 2,
              animationDelay: `${index * 0.2}s`,
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
                    borderRadius: 5,
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