import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

interface LeetCodeStats {
  totalSolved: number;
  ranking: number;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const LeetCodeProgress: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        LeetCode Progress
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box>
          <Typography variant="h6" color="text.secondary">
            Problems Solved
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {stats?.totalSolved}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="text.secondary">
            Global Ranking
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            #{stats?.ranking.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </StyledPaper>
  );
};

export default LeetCodeProgress; 