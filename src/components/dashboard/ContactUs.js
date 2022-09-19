import React from 'react';
import { Box, Typography } from "@material-ui/core";
import ContactBackground from "../../assets/ContactBackground.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        <Box sx={{width:"80%",margin:"auto",}}>
            <Box sx={{ display: "flex", flexDirection: {lg:'row',md:'row',sm:'column',xs:'column'}, justifyContent: "space-around", backgroundImage: `url(${ContactBackground})`,alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"8px",m:4,height:{lg:'100px',md:'100px',sm:'80px',xs:'70px'}}}>
            <Box>
                    <Typography color="#425162" sx={{ fontSize: { lg: '39px', md: '27px', sm: '18px', xs: '10px', lineHeight: { lg: '1.36', md: '1.36', sm: '1.15', xs: '1.2' }, p: { xs: 2 } } }} fontWeight="600" >Let us bring revolution together!
                    </Typography>
            </Box>
                <Box>
                    <Box sx={{ width: { lg: "236px", sm: "216px", md: "226px", xs: "100px" }, height: { lg: "50px", md: "40px", xs: "20px", sm: "40px" }, backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "6px 10px 30px 0 rgb(0 0 0 / 23%)" }}>
                            <Typography color="white" sx={{ fontSize: { lg: '21px', md: '10px', sm: '12px', xs: "7px" } }} fontWeight="600" fontFamily="Montserrat" onClick={handleClickOpen}>Contact Us
                        </Typography>
                    </Box>
            </Box>
            </Box>
        </Box>
        </>
    )
};

export default ContactUs
