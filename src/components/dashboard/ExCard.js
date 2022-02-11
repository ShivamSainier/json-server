import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Button, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"





const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ExCard({imgsrc,title,content}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Exercise
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    );
}
