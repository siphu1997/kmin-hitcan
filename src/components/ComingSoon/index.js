import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import imgComingSoon from 'assets/img/comingsoon.png';
export default function ComingSoon() {
  return (
    <Container>
      <Box textAlign="center" pt={6}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <img
              src={imgComingSoon}
              alt="Coming soon"
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <Link to="/quan-ly-site" style={{ textDecoration: 'none' }}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <HomeIcon />
                  <Box pl={2}>Về trang cá nhân</Box>
                </Box>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
