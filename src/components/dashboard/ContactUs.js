import React from 'react';
import { Box, Typography } from "@material-ui/core";
import ContactBackground from "../../assets/ContactBackground.png"


const ContactUs = () => {
    return (
        <Box sx={{width:"80%",margin:"auto",marginBottom:"4rem"}}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", backgroundImage: `url(${ContactBackground})`,alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"1283px",height:"256px",borderRadius:"8px"}} >
            <Box>
                    <Typography color="#425162" fontSize="49px" fontWeight="600" lineHeight="1.36">Let us bring revolution together!</Typography>
            </Box>
                <Box>
                    <Box sx={{ width: "296px", height: "80px", backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "6px 10px 30px 0 rgb(0 0 0 / 23%)" }}>
                        <Typography color="white" fontSize="24px" fontWeight="600" fontFamily="Montserrat">Contact Us</Typography>
                    </Box>
            </Box>
            </Box>
        </Box>
    )
};

export default ContactUs
