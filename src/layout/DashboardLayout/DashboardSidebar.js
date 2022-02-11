import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Drawer,
  Hidden,
  List,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ContentPasteIcon from '@material-ui/icons/ContentPaste';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {
  BarChart as BarChartIcon,
  Users as UsersIcon
} from 'react-feather';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// @react-redux
import { connect } from "react-redux";
// import { auth } from "../../pages/actions";

import NavItem from '../NavItem';
import Logo from '../../components/Logo'


const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/ExerciseLibrary',
    icon: UsersIcon,
    title: 'ExerciseLibrary'
  },
  {
    href: '/app/Pricing',
    icon: ContentPasteIcon,
    title: 'Pricing'
  },
  {
    href: '/app/SolutionFor',
    icon: LocalHospitalIcon,
    title: 'SolutionFor'
  },
  {
    href: '/app/TeleHealth',
    icon: DateRangeIcon,
    title: 'TeleHealth'
  },
];

const useStyles = makeStyles((theme) => ({
  user__btn: {
    background: "rgba(13, 128, 159, 0.05)",
    border: "1px solid #0D809F",
    borderRadius: "4px",
    padding: "8px 12px",
    color: "#000000",
    textTransform: "capitalize",
    fontSize: 14,
    justifyContent: "space-around",
    "&:hover": {
      background: "rgba(13, 128, 159, 0.05)",
    }
  }
}))

const DashboardSidebar = ({ onMobileClose, openMobile, logout, user }) => {
  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    toast.success("You have successfully logged out.")
    // navigate("/login");
    window.location.reload();
  }

  /* ===== Fetch User Details ===== */

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Hidden lgUp>
        <Box sx={{ px: 2 }}>
          <Logo />
        </Box>
      </Hidden>
      <Box sx={{ p: 2, pt: 0 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {/* <Hidden lgUp> */}
      <Box
        sx={{
          p: 2
        }}
      >
        <Button
          color="primary"
          // component="a"
          variant="contained"
          fullWidth
          className={classes.user__btn}
          endIcon={<PowerSettingsNewIcon sx={{ color: "red" }} />}
          startIcon={<PersonIcon />}
          onClick={handleLogout}
        >
          {user && user.name}
        </Button>
      </Box>
      {/* </Hidden> */}

    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 300
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 200,
              top: 64,
              height: 'calc(100% - 64px)',
              backgroundColor: 'background.paper'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

const mapStateToProps = state => ({
  /** fetched state */
  // user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(auth.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
