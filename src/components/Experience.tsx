import React from 'react';
import { Box, Typography, Paper, Avatar, Chip, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
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

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Ayantrik Tech Private Limited',
      duration: 'Dec 2025 - Present',
      logo: process.env.PUBLIC_URL + '/ayantrik.svg',
      techStack: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'AWS Cloud Services (S3) ','React', 'Docker', 'Git'],
      whatIDid: [
        'Worked on developing Teacher and Student workspace for enterprise solutions.',
        'Subscription Invoice PDF generation from the backend using ReportLab.',
        'Implemented frontend designs using Figma MCP Tool.',
        'Fixed component SVGs and updated them using Inkscape and React.',
        'Technical documentation',
        
      ],
      whatILearned: 'Hands-on experience in Django Backend, RESTful API design. Gained insights into enterprise-level software solutions and improved problem-solving skills in a collaborative environment. Manage Version Control using bitbucket. System design and architecture of the backend services. Atlasian Jira for project management and task tracking.',
    },
    {
      title: 'Competitive Programming Lead',
      company: 'Microsoft Learn Student Chapter KARE',
      duration: 'Jul 2024 - June 2025',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQFZ-JAnW94kSA/company-logo_200_200/company-logo_200_200/0/1700818503661/mlsckare_logo?e=1784160000&v=beta&t=QQ3gZxdeNlxP0lPEhE2iARDyN0XjA8aU_-XwT9vBTAs', // Add image URL/path here (e.g., process.env.PUBLIC_URL + '/microsoft-logo.png')
      techStack: ['C++', 'Python', 'Data Structures', 'Algorithms'],
      whatIDid: [
        'Contributed new problem statements for the hackathons.',
        'Organized hackathons and workshops effectively.',
        'Designed posters and flyers for multiple events.'
      ],
      whatILearned: 'Enhanced leadership and event management skills while deepening my understanding of advanced algorithms and competitive programming strategies.',
    },
    // Add more experiences here following the same structure!
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          mb: 4,
          fontWeight: 'bold'
        }}
      >
        Experience
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Header: Logo, Title, Company, Duration */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {exp.logo ? (
                <Avatar 
                  src={exp.logo} 
                  alt={exp.company} 
                  sx={{ 
                    width: 64, 
                    height: 64, 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    bgcolor: 'white'
                  }} 
                  imgProps={{
                    sx: {
                      objectFit: 'contain',
                      p: 1
                    }
                  }}
                />
              ) : (
                <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <WorkIcon fontSize="large" />
                </Avatar>
              )}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {exp.title}
                </Typography>
                <Typography variant="h6" color="primary.main">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {exp.duration}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ opacity: 0.6 }} />

            {/* Tech Stack */}
            {exp.techStack && exp.techStack.length > 0 && (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <CodeIcon color="primary" fontSize="small" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Tech Stack & Tools</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.techStack.map((tech, idx) => (
                    <Chip 
                      key={idx} 
                      label={tech} 
                      size="small" 
                      sx={{ 
                        bgcolor: '#F0F0F0', 
                        color: 'text.primary',
                        fontWeight: 500,
                        transition: 'transform 0.2s',
                        borderRadius: '4px',
                        '&:hover': { transform: 'scale(1.05)' }
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
                  <AutoGraphIcon color="primary" fontSize="small" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>What I Did</Typography>
                </Box>
                <Box component="ul" sx={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {exp.whatIDid.map((item, idx) => (
                    <Box 
                      component="li" 
                      key={idx}
                      sx={{
                        color: 'text.primary',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': { transform: 'translateX(5px)' },
                      }}
                    >
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* What I Learned */}
            {exp.whatILearned && (
              <Box sx={{ bgcolor: '#F9F9F9', p: 2.5, borderRadius: '4px', borderLeft: '4px solid #D4C5B9' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LightbulbIcon color="secondary" fontSize="small" />
                  <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>What I Learned</Typography>
                </Box>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  {exp.whatILearned}
                </Typography>
              </Box>
            )}
            
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Experience; 