import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Kalasalingam Academy of Research and Education',
      duration: '2023 - 2027',
      details: [
        'Major: Computer Science with AI/ML Specialization',
        'Relevant Coursework: Python, Data Structures & Algorithms, Machine Learning, Database Systems, IOT '
      ],
    },
    {
      degree: 'High School',
      institution: 'Kendriya Vidyalaya - Uppal No.1',
      duration: '2021 - 2023',
      details: [
        'CBSE (Central Board of Secondary Education)',
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