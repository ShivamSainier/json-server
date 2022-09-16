import React from 'react';
import { Box, Typography } from "@material-ui/core";
import ContactBackground from "../../assets/ContactBackground.png"

const ContactUs = () => {
    return (
        <Box sx={{width:"80%",margin:"auto",}}>
            <Box sx={{ display: "flex", flexDirection: {lg:'row',md:'row',sm:'column',xs:'column'}, justifyContent: "space-around", backgroundImage: `url(${ContactBackground})`,alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"8px",m:4,height:{lg:'100px',md:'100px',sm:'80px',xs:'70px'}}}>
            <Box>
                    <Typography color="#425162" sx={{ fontSize: { lg: '39px', md: '27px', sm: '18px', xs: '10px', lineHeight: { lg: '1.36', md: '1.36', sm: '1.15', xs: '1.2' }, p: { xs: 2 } } }} fontWeight="600" >Let us bring revolution together!
                    </Typography>
            </Box>
                <Box>
                    <Box sx={{ width: { lg: "236px", sm: "216px", md: "226px", xs: "100px" }, height: { lg: "50px", md: "40px", xs: "20px", sm: "40px" }, backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "6px 10px 30px 0 rgb(0 0 0 / 23%)" }}>
                        <Typography color="white" sx={{ fontSize: { lg: '21px', md: '10px', sm: '12px', xs: "7px" } }} fontWeight="600" fontFamily="Montserrat">Contact Us
                        </Typography>
                    </Box>
            </Box>
            </Box>
        </Box>
    )
};

export default ContactUs
