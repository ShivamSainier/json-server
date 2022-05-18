import React from 'react'
import classes from './Header.module.css'
import { Button } from '@material-ui/core'
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
    <div className={`${classes.headerWrap}`}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className={classes.logo} onClick={() => navigate("/app/dashboard")}>
          TraceLyfe
        </div>
        <div className='d-flex'>
          <div className='mr-10'>
            <Button size="small" className={classes.kisok}>
              What is Kisok
            </Button>
            <Button
              size="small"
              sx={{ color: "#f57059", fontWeight: 600, }}
              onClick={() => navigate('PrivacyPolicy')}
            >
              Our Privacy Policy
            </Button>
            <Button size="small" className={classes.team}>
              Team
            </Button>
            <Button size="small" className={classes.partner}>
              Partner
            </Button>
          </div>
          <div className='d-flex align-items-center'>
          </div>
          <div className='d-flex align-items-center ml-10'>

          </div>
        </div>
      </div>
    </ div >
  )

}
