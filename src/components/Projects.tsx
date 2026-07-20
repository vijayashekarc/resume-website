import React from 'react';
import { Box, Typography, Paper, Chip, Button, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

const Projects: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography 
          variant="h4" 
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            fontWeight: 'bold',
            color: 'text.primary'
          }}
        >
          Projects
        </Typography>
        <Button 
          component={RouterLink} 
          to="/projects" 
          endIcon={<ArrowForwardIcon />}
          sx={{ 
            color: 'text.primary',
            fontWeight: 'bold',
            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
          }}
        >
          View All
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 3,
          pb: 2,
          scrollSnapType: 'x mandatory',
          animation: `${fadeIn} 1s ease-out`,
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.mode === 'light' ? '#F9F9F9' : 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.mode === 'light' ? '#CCCCCC' : 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.mode === 'light' ? '#999999' : 'rgba(255,255,255,0.4)',
          },
        }}
      >
        {projectsData.map((project, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              minWidth: { xs: '300px', md: '400px' },
              maxWidth: { xs: '300px', md: '400px' },
              scrollSnapAlign: 'start',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'background.paper',
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
            {/* Image Gallery Header */}
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
                  bgcolor: 'action.hover' // Fallback color
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
                sx={{ 
                  mb: 2, 
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.slice(0, 4).map((tech, idx) => (
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
                {project.technologies.length > 4 && (
                  <Chip
                    label={`+${project.technologies.length - 4}`}
                    size="small"
                    sx={{
                      bgcolor: 'transparent',
                      color: 'text.secondary',
                      fontWeight: 'bold',
                    }}
                  />
                )}
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Projects; 