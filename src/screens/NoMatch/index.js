import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { listRouteByKey } from "configs/configureRoute";
export default function NoMatch() {
  const history = useHistory();
  function backToHome(e) {
    e.preventDefault();
    history.push(listRouteByKey["home"].path);
  }
  return (
    <Container>
      <Box textAlign="center" pt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" color="error">
              PAGE NOT FOUND !
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              <a
                onClick={backToHome}
                href="/"
                style={{ textDecoration: "none" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <span style={{ marginLeft: "8px" }}>Back Home</span>
                </Box>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
