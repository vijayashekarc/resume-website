import React, { useEffect } from 'react';
import { Box, Typography, Container, Paper, Chip, IconButton, Button, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';
import projectsData from '../data/projects.json';

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

const AllProjects: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
        <Button 
          component={RouterLink} 
          to="/" 
          startIcon={<ArrowBackIcon />}
          sx={{ 
            color: 'text.secondary',
            mr: 3,
            '&:hover': { bgcolor: 'transparent', color: 'text.primary' }
          }}
        >
          Back
        </Button>
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          All Projects
        </Typography>
      </Box>

      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, 
          gap: 4 
        }}
      >
        {projectsData.map((project, index) => (
          <Box key={index}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                animation: `${fadeIn} 1s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: theme.palette.mode === 'light' ? '#CCCCCC' : 'rgba(255,255,255,0.24)',
                  boxShadow: theme.palette.mode === 'light' ? '0 10px 30px rgba(0,0,0,0.05)' : '0 10px 30px rgba(0,0,0,0.5)',
                  '& .project-image': {
                    transform: 'scale(1.05)'
                  },
                  '& .project-overlay': {
                    opacity: 1
                  }
                }
              }}
            >
              {/* Image Header */}
              <Box sx={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <Box
                  className="project-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.4s ease-in-out',
                    bgcolor: 'action.hover'
                  }}
                />
                <Box 
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    gap: 2
                  }}
                >
                  {project.githubLink && (
                    <IconButton 
                      href={project.githubLink} 
                      target="_blank" 
                      sx={{ 
                        bgcolor: theme.palette.mode === 'light' ? '#1A1A1A' : 'rgba(255,255,255,0.1)', 
                        color: theme.palette.mode === 'light' ? 'white' : 'text.primary', 
                        '&:hover': { bgcolor: theme.palette.mode === 'light' ? '#333333' : 'rgba(255,255,255,0.2)' } 
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                  {project.demoLink && (
                    <IconButton 
                      href={project.demoLink} 
                      target="_blank" 
                      sx={{ 
                        bgcolor: theme.palette.mode === 'light' ? '#1A1A1A' : 'rgba(255,255,255,0.1)', 
                        color: theme.palette.mode === 'light' ? 'white' : 'text.primary', 
                        '&:hover': { bgcolor: theme.palette.mode === 'light' ? '#333333' : 'rgba(255,255,255,0.2)' } 
                      }}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, lineHeight: 1.3, color: 'text.primary' }}>
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph 
                  sx={{ mb: 3, flexGrow: 1 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'action.hover',
                        color: 'text.secondary',
                        fontWeight: 500,
                        borderRadius: '4px',
                        '&:hover': { bgcolor: 'action.selected' }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AllProjects;
