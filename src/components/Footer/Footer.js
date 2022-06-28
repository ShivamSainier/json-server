import { flexbox } from '@material-ui/system'
import React from 'react'
import classes from './Footer.module.css'
export default function Footer() {
  return (
    <div className={`${classes.footer}`}>
      <div className={`${classes.footerCenter}`}>
        <div className={classes.footerTitle}>
          TraceLyfe
        </div>
        <div className={classes.footerParagraph}>
         
        </div>
        <div>
          <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
            <li style={{ paddingRight: "15px" }}>Campaigns</li>
            <li style={{ paddingRight: "15px" }}>Email Marketing</li>
            <li style={{ paddingRight: "15px" }}>Branding</li>
            <li style={{ paddingRight: "15px" }}>Offline</li>
            <li style={{ paddingRight: "15px" }}>Contact</li>
            <li style={{ paddingRight: "15px" }}>FAQs</li>
          </ul>
        </div>
      </div>

    </div >
  )
}
