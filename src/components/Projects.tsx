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
      title: 'Project 1',
      description: 'A brief description of your project and its key features.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/vijayashekarc/project1',
      demoLink: 'https://project1-demo.com',
    },
    {
      title: 'Project 2',
      description: 'Another project description highlighting your skills and achievements.',
      technologies: ['TypeScript', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com/vijayashekarc/project2',
      demoLink: 'https://project2-demo.com',
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