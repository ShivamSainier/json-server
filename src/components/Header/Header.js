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
    < div className={`${classes.headerWrap}`
    }>
      <div>
        <div className={`${classes.linkContainer}`}>
          <div><a href="http://tracelyfedoctorweb.s3-website.ap-south-1.amazonaws.com/app/dashboard" className={`${classes.link}`}>Login for Doctor </a></div>
          <div><a href="http://tracelyfeorganizationweb.s3-website.ap-south-1.amazonaws.com/app/dashboard" className={`${classes.link}`}>Login For Organisation</a></div>
          <div><a href="https://support.physitrack.com/" className={`${classes.link}`}>Physitrack support </a></div>
        </div>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <img src={Logo} alt="" height={60} width={180} />
        </div>
        <div className='d-flex'>
          <div className='mr-10'>
            <Button size="large" className={classes.bLink}>
              Solutions for
            </Button>
            <Button size="large" className={classes.bLink}>
              Telehealth
            </Button>
            <Button size="large" className={classes.bLink}>
              Excercise library
            </Button>
          </div>
          <div className='d-flex align-items-center'>
          </div>
          <div className='d-flex align-items-center ml-10'>
            <Button
              size="large"
              variant="contained"
              color="main"
              href="http://tracelyfeuserweb.s3-website.ap-south-1.amazonaws.com/app/dashboard"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div >
  )

}
