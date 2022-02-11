import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Avatar } from '@material-ui/core';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ExCard() {
    return (
        <Card sx={{ minWidth: 300, textAlign: "center" }}>
            <CardContent>
                <Box sx={{
                    display: "inlineBlock",
                    marginBottom: "20px",
                    paddingTop: "15px",
                    border: "1px",
                    bordeRadius: "100",
                    backgroundColor: "#ffff",
                }}>
                <img src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac68b7e5e010_Icon-camera.png" alt="" class="exercise-intro-icon" />
                </Box>
                <Typography variant="body2">
                    hello
                </Typography>
            </CardContent>
        </Card>
    );
}
