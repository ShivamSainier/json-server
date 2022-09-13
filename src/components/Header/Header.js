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
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "auto", padding: "3px 100px 0px",}}>
        <Box sx={{ flex: 1, p: 5 }}><img height="44" width="180" src={Logo} /></Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 5}}>
          <Box sx={{ p: 5 }}> <Typography color="#425162" fontSize="20px" fontWeight="500" sx={{ cursor: "pointer", fontFamily: "montserrat", '&:hover': {fontWeight:"600"} }}>Products</Typography></Box>
         
          <Box sx={{ p: 5, }}><Typography color="#425162" fontSize="20px" fontWeight="500" sx={{ cursor: "pointer", '&:hover': { fontWeight: "600" } }}>Partnership</Typography></Box>
          <Box sx={{ p: 5 }}><Typography color="#425162" fontSize="20px" fontWeight="500" sx={{ cursor: "pointer", '&:hover': { fontWeight: "600" } }} >Contact us</Typography></Box>
          <Box sx={{ p: 5 }}><Typography color="#425162" fontSize="20px" fontWeight="500" sx={{ cursor: "pointer", '&:hover': { fontWeight: "600" } }}>Our Partners</Typography></Box>
          <Box sx={{ width: "23%", height: "50px", backgroundColor:"#0D809F", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "2px 5px 10px 0 rgb(0 0 0 / 23%)",cursor:"pointer" }}>
            <Typography color="white" fontSize="20px" fontWeight="600" fontFamily="montserrat" sx={{ '&:hover': { fontWeight: "700" } }}>Login</Typography>
            
          </Box>

        </Box>
      </Box>
    </Box>
  )

}
