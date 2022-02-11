import React, { useState } from 'react';
import { Box, Button, ListItem, Container, Typography, Grid, Paper, styled, Card, CardActions, CardContent } from '@material-ui/core';
import classes from "../../style/dashboard/dashboard.module.scss";
import ExCard from "../../components/dashboard/ExCard";
import { makeStyles } from "@material-ui/styles";
import VideoPlayer from "react-background-video-player";


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
            <Box sx={{ p: 4 }}>
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
          <Box>
            <div className={classes.image_section_exercise_library}>
              <div className={classes.image_section_overlay}>
                <div className={classes.__container}>
                  <div className={classes.w_row}>
                    <div className={classes.text_column_left_exercise_intro}>
                      <h2 className={classes.section_title}>Crystal clear. <br /><strong>Expertly created</strong>.</h2>
                      <p className={classes.__p}>Research studies clearly demonstrate that <strong>videos are vastly
                        superior to illustrations in explaining exercise technique</strong>.
                        <br /><br />
                        Created by<strong>clinical experts from Australia, Europe, US
                          and around the world</strong>, we film our exercises in ultra-HD
                        (4K) and from different angles.
                        <br /><br />
                        All exercise videos are <strong>professionally narrated</strong> to give your
                        patients complete confidence to do their exercises correctly.
                      </p>
                    </div>
                    <div class="w-hidden-small w-hidden-tiny w-col w-col-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container >
      </Box >
    </>
  )
}

export default index