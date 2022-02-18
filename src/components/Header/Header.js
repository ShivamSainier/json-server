import React from 'react'
import classes from './Header.module.css'
import {Button} from '@material-ui/core'
import Lock from '@material-ui/icons/Lock'
import Logo from '../main_logo.png'
export default function Header() {
  return (
    <div className={`${classes.headerWrap}`}>
      <div>
        <div className={`${classes.linkContainer}`}>
          <div href="https://us.physiapp.com/" className={`${classes.link}`}>Login for patients</div>
          <div href="https://support.physitrack.com/" className={`${classes.link}`}>Physitrack support</div>
          <div href="https://www.physitrackgroup.com" className={`${classes.link}`}>Investors</div>
          <div href="https://physitrack.typeform.com/to/eTP8iI" className={`${classes.link}`}>Contact Sales</div>
        </div>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <img src={Logo} alt="" height={60} width={180}/>
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
            <Button size="large" className={classes.bLink}>
              Pricing
            </Button>
          </div>
          
          <div className='d-flex align-items-center'>
            <Button
              variant="outlined" size="large" color="main">
              Try demo
            </Button>
          </div>
          <div className='d-flex align-items-center ml-10'>
            <Button
              size="large" 
              variant="contained"
              color="main"
              startIcon={<Lock />}
            >
              login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
