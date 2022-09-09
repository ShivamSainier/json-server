import React from 'react'
import classes from './Header.module.css'
import { Button,Box,Typography } from '@material-ui/core'
import Lock from '@material-ui/icons/Lock'
import Logo from '../main_logo.png';
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../redux/actions";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.dashboard.userData)
  console.log("user", user);
  const handlelogout = () => {
    dispatch(auth.logout());
    toast.success("Logout Successfully", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
    navigate("/login");
  }
  return (
    <Box sx={{width:"100%"}}>
      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"80%",margin:"auto",padding:"10px"}}>
      <Box sx={{ fontStyle: "normal", fontSize: { md: "20px", lg: "20px", sm: "20px", xs: "10px" }, lineHeight: { md: "30px", lg: "30px", sm: "30px", xs: "15px" }, cursor: "pointer", color: "#F57059", fontWeight:"800",flex:{md:3,lg:3,sm:3,xs:1}}} onClick={() => navigate("/app/dashboard")}>
          TraceLyfe
      </Box>
        <Box sx={{ display: "flex", flexDirection: "row", fontSize: { md: "20px", lg: "20px", sm: "20px", xs: "10px" }, lineHeight: { md: "30px", lg: "30px", sm: "30px", xs: "15px" },flex:{md:2,lg:2,sm:2,xs:2} }}>
          <Box sx={{ fontSize: { md: "20px", lg: "20px", sm: "20px", xs: "10px" }, fontWeight:"800",color:"#F57059",flex:{md:2,lg:2,sm:2,xs:3} }}>
            What is Kisok
        </Box>
        <Box
            sx={{ color: "#f57059", fontWeight: 600, fontSize: { md: "20px", lg: "20px", sm: "20px", xs: "10px" }, flex:{md: 2,lg: 2,sm: 2,xs: 3}, color:"#F57059"}}
          onClick={() => navigate('PrivacyPolicy')}>
          Our Privacy Policy
        </Box>
          <Box sx={{ color: "#f57059", fontWeight: 600, fontSize: { md: "20px", lg: "20px", sm: "20px", xs: "10px" }, flex:{md: 1,lg: 1,sm: 2,xs: 1} }}>
          Team
        </Box>
        </Box>
      </Box>
    </ Box >
  )

}
