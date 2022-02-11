import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// @react-redux
import { connect } from "react-redux";
// import { auth } from "../../pages/actions";
import Logo from '../../components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    boxShadow: '0px 0px 25px 4px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: 60,
    height: 60
  },
  btn: {
    borderRadius: '8px',
    textTransform: 'capitalize',
    padding: '9px 18px'
  },
  btn_text: {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center'
  },
  btn_ava: {
    width: 25,
    height: 25,
    margin: '0 10px'
  },
  popmenubox: {
    padding: theme.spacing(2)
  },
  menu_text: {
    color: theme.palette.text.secondary,
    fontSize: '12px'
  },
  menu_item: {
    padding: '12px 0px'
  },
  menu_link: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  menu_avatar: {
    fontSize: '14px',
    width: 35,
    height: 35
  }

}));


const DashboardNavbar = ({ logout, onMobileNavOpen, getUser, user, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleLogout = () => {
    logout();
    toast.success("You have successfully logged out.")
    // navigate("/login");
    window.location.reload();
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = 'tracelyfe-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      elevation={8}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <Box className={classes.popmenubox}>
        <Typography variant="h6" className={classes.menu_text}>
          you are viewing your personal profile <br />
          <b style={{ textTransform: "capitalize" }}>{user && user.name}</b> in <b style={{ textTransform: "capitalize" }}>{user && user.organisation}</b>
        </Typography>
        <Box>
          <MenuItem
            onClick={() => {
              navigate('/app/employee')
              setAnchorEl(null)
            }}
            className={classes.menu_item}
          >
            <Typography variant="h6" className={classes.menu_link}>
              <PersonIcon style={{ marginRight: '15px' }} />
              Patient List
            </Typography>

          </MenuItem>
          <MenuItem
            onClick={handleLogout}
            className={classes.menu_item}
          >
            <Typography variant="h6" className={classes.menu_link}>
              <ExitToAppIcon style={{ marginRight: '15px' }} />
              Logout
            </Typography>

          </MenuItem>
        </Box>
      </Box>
    </Menu>
  );

  /* ===== Fetch User Details ===== */

  useEffect(() => {
    // getUser()
  }, [])
  return (
    <>
      <AppBar
        elevation={0}
        {...rest}
        sx={{
          boxShadow: '0px 0px 25px 4px rgb(0 0 0 / 3%) !important',
          background: '#fff'
        }}
      >
        <Toolbar>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />
          <Hidden lgDown>
            {/* <IconButton color="primary" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
            <IconButton
              color="primary"
              size="large"
              onClick={handleProfileMenuOpen}
            >
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="primary" onClick={onMobileNavOpen} size="large">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

const mapStateToProps = state => ({
  /** fetched state */
  user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(auth.logout()),
  // getUser: () => dispatch(auth.getUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);
