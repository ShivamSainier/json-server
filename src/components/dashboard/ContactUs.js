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
                <DialogTitle sx={{ textAlign: "center", fontSize: { lg: '25px', md: '22px', sm: '18px', xs: '16px' }, fontWeight: "500", color:"#ABD66E"}}>Contact us</DialogTitle>
                <form>
                    <DialogContent sx={{ display:'flex',flexDirection:'column',gap:4}}>
                        
                        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ fontWeight: "600", color:"#425162"}}>First Name</Typography>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Fname"
                                    
                                    type="text"
                                    fullWidth
                                        variant="outlined"
                                        sx={{width:"80%"}}
                                        />
                                </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "600", color: "#425162" }}>Last Name</Typography>
                               
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Lname"
                           
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{ width: "80%" }}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "600", color: "#425162" }}>E-mail Id</Typography>
                         <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "600", color: "#425162" }}>City</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                                id="Address"
                                multiline
                                rows={4}
                            type="text"
                            fullWidth
                            variant="outlined"
                            />
                        </Box>
                        <Button type="submit" sx={{ backgroundColor:"#1B9ED9",color:"white",p:1,width:{lg:"50%",md:"50%",sm:'80%',xs:"100%",margin:"auto"}}}>Submit</Button>
                    </DialogContent>
                </form>
                <DialogActions>
                    
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
                            <Typography color="white" sx={{ fontSize: { lg: '21px', md: '10px', sm: '12px', xs: "7px" } ,cursor:"pointer",'&hover':{backgroundColor:"green"}}} fontWeight="600" fontFamily="Montserrat" onClick={handleClickOpen}>Contact Us
                        </Typography>
                    </Box>
            </Box>
            </Box>
        </Box>
        </>
    )
};

export default ContactUs
