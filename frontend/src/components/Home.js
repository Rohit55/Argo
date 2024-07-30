import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Inventory Management System
        </Typography>
        <Typography variant="body1">
          Manage your inventory efficiently and effectively.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
