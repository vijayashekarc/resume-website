import React from 'react';
import { Box, Typography, Paper, Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const Projects: React.FC = () => {
  const projects = [
    
    {
      title: 'Expense Tracker ',
      description: 'A basic expense tracker for your daily spendings. A web application for managing personal expenses for multiple users. Google Account users can login directly or also with custom email IDs too. User-data is being managed using Supabase integration.',
      technologies: ['HTML5', 'CSS', 'JavaScript','React.js','Node.js',"Google Cloud Platform - 0Auth ",'Supabase - PostgreSQL'],
      githubLink: 'https://github.com/vijayashekarc/ExpenseEase',
      demoLink: 'https://github.com/vijayashekarc/ExpenseEase',
    },
    {
      title: 'College Student Login Portal ',
      description: ' A College Login Portal for seamless on campus event registration.  (A Problem statement given in INNOVATE KARE - 24Hr Hackathon organized by Coding Blocks KARE & ScoreCraft) ',
      technologies: ['HTML5', 'CSS', 'JavaScript','Node.js',"Google Cloud Platform - 0Auth ",'Supabase - PostgreSQL'],
      githubLink: 'https://github.com/vijayashekarc/',
      demoLink: 'https://github.com/vijayashekarc/',
    },
    {
      title: 'Grocery-Store-Interface-Project',
      description: 'Project based on an online grocery store interface \n with features : Sign Up - Sign In - Multiple Payment Options - Delete Account - Reset Password - Generating Bill - \n Both in Text and PDF format (Using File operation) - Managing User Data and their ordered item history using \n CSV File and MySQL - Sending auto-generated bill through e-mail using SMTP library in python and Gmail API.',
      technologies: ['Python', 'MySQL', 'GCP'],
      githubLink: 'https://github.com/vijayashekarc/Grocery-Store-Interface-Project',
      demoLink: 'https://github.com/vijayashekarc/Grocery-Store-Interface-Project',
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
        Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          '& > *': {
            flex: '1 1 400px',
            minWidth: '300px',
            animation: `${fadeIn} 1s ease-out`,
            animationFillMode: 'both',
          },
        }}
      >
        {projects.map((project, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              animationDelay: `${index * 0.2}s`,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {project.description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {project.technologies.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    mr: 1,
                    mb: 1,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <GitHubIcon sx={{ mr: 0.5 }} />
                GitHub
              </Link>
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  Live Demo
                </Link>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Projects; 