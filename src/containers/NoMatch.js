import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useUserState } from '../context/UserContext';
import { listRouteByKey } from '../config/configureRoute';
export default function NoMatch() {
  const { isAuthenticated } = useUserState();
  const history = useHistory();
  function backToHome(e) {
    e.preventDefault();
    if (isAuthenticated) {
      history.push(listRouteByKey['manage_site'].path);
    } else {
      history.push(listRouteByKey['login'].path);
    }
  }
  return (
    <Container>
      <Box textAlign="center" pt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* <Typography variant="h1" color="error">
              404 - CICD -
            </Typography> */}
            <Typography variant="h3" color="error">
              PAGE NOT FOUND !
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <a
                onClick={backToHome}
                href="/"
                style={{ textDecoration: 'none' }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <HomeIcon />
                  <span style={{ marginLeft: '8px' }}>Back Home</span>
                </Box>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
