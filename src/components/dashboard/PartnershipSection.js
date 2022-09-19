import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from "@material-ui/core";
import HIC from "../../assets/PartnerImages/HIC.png";
import SmartCity from "../../assets/PartnerImages/SmartCity.png";
import NGO from "../../assets/PartnerImages/NGO.png";
import Panchayat from "../../assets/PartnerImages/Panchayat.png";
import Location from "../../assets/PartnerImages/Location.png";
import background from "../../assets/PartnershipBackground.png";

const PartnershipSection = () => {
  return (
    <Box sx={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",backgroundPosition:"centerTop", color: "white",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Box sx={{ width: "100%", margin: "auto" }}> 
        <Box textAlign="center" padding="10px" margin="10px">
          <Typography sx={{ textAlign: "center", p: 2, fontSize: { lg: "44px", md: "33px", sm: "33px", xs: "28px" } }} fontWeight="600">Partnerships</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: {lg:'no-wrap',md:'no-wrap',sm:'wrap',xs:'wrap'}, gap: {lg:6,md:4,sm:2,xs:1}, justifyContent: "center",m:5 }}>
          <Card sx={{ height: {lg:'231px',md:'221px',sm:'200px',xs:'120px'}, width: {lg:'322px',md:'312px',sm:'192px',xs:'110px'}, display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={HIC} alt="Helth insurence Company"  />
              <Typography fontSize="17px"  sx={{fontSize:{lg:'17px',md:'14px',sm:'8px',xs:'6px'}}}>Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: { lg: '231px', md: '221px', sm: '200px', xs: '120px' }, width: { lg: '322px', md: '312px', sm: '192px', xs: '110px' }, display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={Location} alt="Retail Location" />
              <Typography sx={{ fontSize: { lg: '17px', md: '14px', sm: '12px', xs: '8px' } }} >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: { lg: '231px', md: '221px', sm: '200px', xs: '120px' }, width: { lg: '322px', md: '312px', sm: '192px', xs: '110px' }, display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={NGO} alt="NGO" />
              <Typography sx={{ fontSize: { lg: '17px', md: '14px', sm: '12px', xs: '8px' } }}  >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: { lg: '231px', md: '221px', sm: '200px', xs: '120px' }, width: { lg: '322px', md: '312px', sm: '192px', xs: '110px' }, display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={SmartCity} alt="Smart City" />
              <Typography sx={{ fontSize: { lg: '17px', md: '14px', sm: '12px', xs: '8px' } }} >Smart City
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default PartnershipSection
