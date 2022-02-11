import React from 'react';
import { Box, Button, ListItem, Container, Typography, Grid,Paper,styled,Card ,CardActions ,CardContent   } from '@material-ui/core';
import classes from "../../style/dashboard/dashboard.module.scss";
import ExCard from "../../components/dashboard/ExCard";


function index() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.secondary',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false} className={classes.root__container}>
          <Box className={classes.header__container}>
            <Box sx={{p:4}}>
              <Typography className={classes.title}>Exercise library</Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={8} md={3}>
              <ExCard />
            </Grid>
            <Grid item xs={8} md={3}>
            <ExCard />
            </Grid>
            <Grid item xs={8} md={3}>
            <ExCard />
            </Grid>
            <Grid item xs={8} md={3}>
            <ExCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default index