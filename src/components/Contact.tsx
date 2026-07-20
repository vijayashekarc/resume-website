import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  
  // Custom colors based on theme
  const isLight = theme.palette.mode === 'light';
  const bgColor = isLight ? '#1A1A1A' : '#1E1E1E'; // or theme.palette.background.paper
  const textColor = isLight ? 'white' : 'text.primary';
  const subtextColor = isLight ? '#CCCCCC' : 'text.secondary';

  useEffect(() => {
    const currentRef = containerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Expand when at least 30% of the component is visible
        if (entry.isIntersecting) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box 
      id="contact" 
      ref={containerRef}
      sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        mt: 8,
        overflow: 'hidden'
      }}
    >
      <Paper
        elevation={0}
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 4 },
          bgcolor: bgColor,
          color: textColor,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          
          // Animation properties
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s',
          width: isExpanded ? '100%' : 'calc(100% - 48px)', // accounts for px:3 (24px each side) when not expanded
          maxWidth: isExpanded ? '100vw' : '1200px',
          borderRadius: isExpanded ? '0px' : '12px',
          border: isExpanded ? 'none' : '1px solid',
          borderColor: 'divider',
          borderBottom: 'none' // flush with bottom/footer
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 2, 
            color: textColor,
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isExpanded ? 1 : 0,
            transitionDelay: '0.1s'
          }}
        >
          Let's Work Together
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: subtextColor, 
            mb: 4, 
            maxWidth: '600px', 
            fontWeight: 'normal',
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isExpanded ? 1 : 0,
            transitionDelay: '0.2s'
          }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1.5, 
            mb: 4, 
            alignItems: 'center',
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isExpanded ? 1 : 0,
            transitionDelay: '0.3s'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: subtextColor }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body1" sx={{ color: subtextColor }}>
              vijayashekarc@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: subtextColor }}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body1" sx={{ color: subtextColor }}>
              Bengaluru
            </Typography>
          </Box>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2, 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isExpanded ? 1 : 0,
            transitionDelay: '0.4s'
          }}
        >
          <Button
            variant="contained"
            href="mailto:vijayashekarc@gmail.com"
            startIcon={<EmailIcon />}
            sx={{
              bgcolor: isLight ? 'white' : 'primary.main',
              color: isLight ? '#1A1A1A' : 'background.paper',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              '&:hover': {
                bgcolor: isLight ? '#F0F0F0' : '#E0E0E0',
              }
            }}
          >
            Say Hello
          </Button>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{
              color: isLight ? 'white' : 'primary.main',
              borderColor: isLight ? 'white' : 'primary.main',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              '&:hover': {
                bgcolor: isLight ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.08)',
                borderColor: isLight ? 'white' : 'primary.main',
              }
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;
