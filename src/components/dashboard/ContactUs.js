import React from 'react';
import { Box, Typography } from "@material-ui/core";
import ContactBackground from "../../assets/ContactBackground.png"

const ContactUs = () => {
    return (
        <Box sx={{width:"80%",margin:"auto"}}>
            <Box sx={{ display: "flex", flexDirection: {lg:'row',md:'row',sm:'column',xs:'column'}, justifyContent: "space-around", backgroundImage: `url(${ContactBackground})`,alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"8px"}}>
            <Box>
                    <Typography color="#425162" sx={{ fontSize: { lg: '49px', md: '45px', sm: '38px', xs: '15px', lineHeight: { lg: '1.36', md: '1.36',sm:'1.26',xs:'1.6' },p:{xs:5} }}} fontWeight="600" >Let us bring revolution together!</Typography>
            </Box>
                <Box>
                    <Box sx={{ width: { lg: "296px", sm: "216px", md: "226px", xs: "110px" }, height: { lg: "80px", ms: "60px", xs: "20", sm: "40" }, backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "6px 10px 30px 0 rgb(0 0 0 / 23%)" }}>
                        <Typography color="white" sx={{ fontSize: { lg: '24px', md: '10px', sm: '12px', xs: "7px" } }} fontWeight="600" fontFamily="Montserrat">Contact Us</Typography>
                    </Box>
            </Box>
            </Box>
        </Box>
    )
};

export default ContactUs
