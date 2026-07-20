import React from 'react';
import { 
  Box, Typography, Paper, Avatar, Chip, Divider, Link,
  useTheme, useMediaQuery, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@mui/system';
import experienceData from '../data/experience.json';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          mb: 4,
          fontWeight: 'bold',
          px: { xs: 2, md: 0 },
          color: 'text.primary'
        }}
      >
        Experience
      </Typography>
      
      {/* Timeline Container */}
      <Box sx={{ position: 'relative', ml: { xs: 0, md: 2 } }}>
        
        {/* Vertical Line (Desktop Only) */}
        {!isMobile && (
          <Box 
            sx={{ 
              position: 'absolute', 
              left: '36px', 
              top: '32px', 
              bottom: '32px', 
              width: '2px', 
              bgcolor: 'divider',
              zIndex: 0
            }} 
          />
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 5 } }}>
          {experienceData.map((exp, index) => (
            <Box 
              key={index} 
              sx={{ 
                position: 'relative', 
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 0, md: 4 }
              }}
            >
              {/* Timeline Node / Logo (Desktop Only) */}
              {!isMobile && (
                <Box sx={{ position: 'relative', zIndex: 1, mt: 1 }}>
                  {exp.logo ? (
                    <Avatar 
                      src={exp.logo.startsWith('http') ? exp.logo : process.env.PUBLIC_URL + exp.logo} 
                      alt={exp.company} 
                      sx={{ 
                        width: 72, 
                        height: 72, 
                        border: '2px solid',
                        borderColor: 'divider',
                        bgcolor: '#FFFFFF'
                      }} 
                      imgProps={{
                        sx: {
                          objectFit: 'contain',
                          p: 0.5
                        }
                      }}
                    />
                  ) : (
                    <Avatar 
                      sx={{ 
                        width: 72, 
                        height: 72, 
                        bgcolor: 'action.hover', 
                        color: 'text.secondary', 
                        border: '2px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <WorkIcon fontSize="large" />
                    </Avatar>
                  )}
                </Box>
              )}

              {/* Experience Card */}
              <Paper
                elevation={0}
                sx={{
                  flexGrow: 1,
                  p: { xs: 2.5, md: 4 },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px',
                  animation: `${fadeIn} 1s ease-out`,
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  position: 'relative',
                  width: '100%',
                  bgcolor: 'background.paper',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '32px',
                    left: '-8px',
                    width: '16px',
                    height: '16px',
                    bgcolor: 'background.paper',
                    borderTop: '1px solid',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                    transform: 'rotate(-45deg)',
                    display: { xs: 'none', md: 'block' } // Only show little speech bubble arrow on desktop
                  }
                }}
              >
                {/* Header: Title, Company, Duration */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    
                    {/* Mobile Logo */}
                    {isMobile && (
                      <Box>
                        {exp.logo ? (
                          <Avatar 
                            src={exp.logo.startsWith('http') ? exp.logo : process.env.PUBLIC_URL + exp.logo} 
                            alt={exp.company} 
                            sx={{ width: 48, height: 48, border: '1px solid', borderColor: 'divider', bgcolor: '#FFFFFF' }} 
                            imgProps={{ sx: { objectFit: 'contain', p: 0.5 } }}
                          />
                        ) : (
                          <Avatar sx={{ width: 48, height: 48, bgcolor: 'action.hover', color: 'text.secondary', border: '1px solid', borderColor: 'divider' }}>
                            <WorkIcon fontSize="small" />
                          </Avatar>
                        )}
                      </Box>
                    )}

                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2, mb: 0.5, color: 'text.primary' }}>
                        {exp.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {exp.companyUrl && exp.companyUrl !== '#' ? (
                          <Link 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            sx={{ 
                              color: 'text.primary', 
                              fontWeight: 500, 
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' } 
                            }}
                          >
                            {exp.company}
                          </Link>
                        ) : (
                          <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                            {exp.company}
                          </Typography>
                        )}
                        {(exp as any).linkedin && (
                          <Link href={(exp as any).linkedin} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', color: '#0A66C2', '&:hover': { opacity: 0.8 } }}>
                            <LinkedInIcon sx={{ fontSize: 20 }} />
                          </Link>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, mt: { xs: 0, sm: 1 } }}>
                    {exp.duration}
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: 'divider' }} />

                {/* Tech Stack */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <CodeIcon sx={{ color: 'text.secondary' }} fontSize="small" />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Technologies
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.techStack.map((tech, idx) => (
                        <Chip 
                          key={idx} 
                          label={tech} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'action.hover', 
                            color: 'text.primary',
                            fontWeight: 500,
                            borderRadius: '4px',
                            border: '1px solid transparent',
                            '&:hover': { bgcolor: 'action.selected', borderColor: 'divider' }
                          }} 
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* What I Did */}
                {exp.whatIDid && exp.whatIDid.length > 0 && (
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <AutoGraphIcon sx={{ color: 'text.secondary' }} fontSize="small" />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Contributions
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {exp.whatIDid.map((item, idx) => (
                        <Box 
                          component="li" 
                          key={idx}
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {/* What I Learned */}
                {exp.whatILearned && (
                  isMobile ? (
                    <Accordion 
                      disableGutters 
                      elevation={0}
                      sx={{ 
                        bgcolor: 'action.hover', 
                        border: '1px solid',
                        borderColor: 'divider',
                        borderLeft: '4px solid #D4C5B9',
                        '&:before': { display: 'none' }
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.primary' }} />} sx={{ px: 2, minHeight: '48px', '& .MuiAccordionSummary-content': { my: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LightbulbIcon sx={{ color: '#D4C5B9' }} fontSize="small" />
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Key Takeaways
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pt: 0, px: 2, pb: 2 }}>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                          {exp.whatILearned}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Box sx={{ bgcolor: 'action.hover', p: 3, borderRadius: '4px', borderLeft: '4px solid #D4C5B9' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LightbulbIcon sx={{ color: '#D4C5B9' }} fontSize="small" />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Key Takeaways
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                        {exp.whatILearned}
                      </Typography>
                    </Box>
                  )
                )}
                
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience; 