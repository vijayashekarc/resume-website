import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Link, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

interface LeetCodeStats {
  totalSolved: number;
  ranking: number;
  totalQuestions: number;
}

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

const LeetCodeProgress: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/vijayashekarc');
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        const data = await response.json();
        setStats({
          totalSolved: data.totalSolved,
          ranking: data.ranking,
          totalQuestions: data.totalQuestions,
        });
      } catch (err) {
        setError('Failed to load LeetCode stats');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress sx={{ color: '#FFA116' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const percentage = stats ? (stats.totalSolved / stats.totalQuestions) * 100 : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary'
        }}
      >
        LeetCode Progress
      </Typography>
      
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          animation: `${fadeIn} 1s ease-out`,
          animationFillMode: 'both',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: 4,
          bgcolor: 'background.paper'
        }}
      >
        {/* Left Side: Logo and Ranking */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
          <Link 
            href="https://leetcode.com/u/vijayashekarc/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5, 
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.8 }
            }}
          >
            <img 
              src="https://cdn.simpleicons.org/leetcode/FFA116" 
              alt="LeetCode Logo" 
              style={{ width: 36, height: 36 }} 
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', letterSpacing: '-0.5px' }}>
              LeetCode
            </Typography>
          </Link>
          
          <Box>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, mb: 0.5 }}>
              Global Ranking
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary', letterSpacing: '-1px' }}>
              #{stats?.ranking.toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Circular Progress */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 4 }, bgcolor: 'action.hover', p: 3, borderRadius: '8px', border: '1px solid', borderColor: 'divider', minWidth: { xs: '100%', md: 'auto' } }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            {/* Background Track */}
            <CircularProgress
              variant="determinate"
              value={100}
              size={120}
              thickness={4}
              sx={{ color: theme.palette.mode === 'light' ? '#EAEAEA' : 'rgba(255,255,255,0.08)' }}
            />
            {/* Foreground Progress */}
            <CircularProgress
              variant="determinate"
              value={percentage}
              size={120}
              thickness={4}
              sx={{
                color: '#FFA116', // Official LeetCode Orange
                position: 'absolute',
                left: 0,
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 1s ease-in-out',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                }
              }}
            />
            {/* Center Text */}
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                {stats?.totalSolved}
              </Typography>
            </Box>
          </Box>
          
          <Box>
             <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, mb: 0.5 }}>
              Total Solved
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              out of {stats?.totalQuestions?.toLocaleString()}
            </Typography>
          </Box>
        </Box>

      </Paper>
    </Box>
  );
};

export default LeetCodeProgress; 