import React from 'react'
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Button, Box, Typography } from '@material-ui/core';
import getintouch from "../../assets/getintouch.png";




const AnyReactComponent = ({ text }) => <div>{text}</div>;

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};


const Map = () => {
    return (
        <Box sx={{ backgroundImage: `url(${getintouch})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',p:8}}>
            <Box sx={{width:{lg:'80%',md:'80%',sm:'80%',xs:'80%'},margin:'auto'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:4}}>
                    <Box>
                        <Typography sx={{ fontSize: { lg: '39px', md: '35px', sm: '30px', xs: '25px' },textAlign:'center' }} fontWeight="600">
                            Get In Touch
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:{lg:'row',md:'row',sm:'column-reverse',xs:'column-reverse'},justifyContent:'space-around',alignItems:'center'}}>
                        <Box sx={{flex:2,my:{lg:0,md:0,sm:3,xs:3}}}>
                            <Typography sx={{fontSize:{lg:'22px',md:'20px',sm:'18px',xs:'15px'} ,fontWeight:600}}>floor 9 ,SAS Tower <br />Sector 38 ,GURUGRAM<br /> 122001 </Typography>
                        </Box>
                    <Box sx={{flex:{lg:4,md:4,sm:2,xs:2}}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.278474253813!2d77.03732951511665!3d28.44102068249374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18695c471015%3A0xa44b7b144935cae4!2sSAS%20Tower!5e0!3m2!1sen!2sin!4v1634802770176!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: 0, borderRadius: 13 }}
                        allowFullScreen=""
                        loading="lazy"
                        >
                        </iframe>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
  )
}

export default Map
