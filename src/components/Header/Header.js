import React from 'react'
import classes from './Header.module.css'
import { Button,Box,Typography } from '@material-ui/core'
import Lock from '@material-ui/icons/Lock'
import Logo from '../main_logo.png';
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../redux/actions";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'typeface-montserrat';
import 'typeface-raleway'

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.dashboard.userData)
  console.log("user", user);
  const handlelogout = () => {
    dispatch(auth.logout());
    toast.success("Logout Successfully", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
    navigate("/login");
  };
  return (
    <Box sx={{backgroundColor:"#FFFFFF"}}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width:{lg:'90%',md:'90%',sm:'100%',xs:'100%'}, margin: "auto", padding: "3px 100px 0px",}}>
        <Box sx={{width:"20%" }}><img src={Logo} style={{width:"100%" ,height:"auto"}} /></Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 5}}>
          <Box> <Typography color="#425162" fontSize="20px" fontWeight="500" sx={{ fontSize: { lg: '20px', md: '20px', sm: '10px', xs: '5px' }, cursor: "pointer", fontFamily: "montserrat", '&:hover': {fontWeight:"600"} }}>Products</Typography></Box>
          <Box><Typography color="#425162" fontWeight="500" sx={{ fontSize: { lg: '20px', md: '20px', sm: '10px', xs: '5px' }, cursor: "pointer", '&:hover': { fontWeight: "600", } }}>Partnership</Typography></Box>
          <Box><Typography color="#425162" fontWeight="500" sx={{ fontSize: { lg: '20px', md: '20px', sm: '10px', xs: '5px' }, cursor: "pointer", '&:hover': { fontWeight: "600" } }} >Contact us</Typography></Box>
        </Box>
      </Box>
    </Box>
  )

}
