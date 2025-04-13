import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Your University',
      duration: '2016 - 2020',
      details: [
        'Major: Computer Science',
        'GPA: X.X/4.0',
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
      ],
    },
    {
      degree: 'High School',
      institution: 'Your School',
      duration: '2014 - 2016',
      details: [
        'Science Stream',
        'Percentage: XX%',
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {education.map((edu, index) => (
          <Paper key={index} elevation={3} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon sx={{ mr: 1 }} />
              <Box>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.institution} | {edu.duration}
                </Typography>
              </Box>
            </Box>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {edu.details.map((detail, idx) => (
                <li key={idx}>
                  <Typography variant="body1">{detail}</Typography>
                </li>
              ))}
            </ul>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Education; 