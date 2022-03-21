import { useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Grid,
  Link,
  Hidden
} from '@material-ui/core';
import { toast } from "react-toastify";
// @react-redux
import { connect } from "react-redux";
import { auth } from "../../redux/actions";

import Logo from "../../components/Logo";


// Stylesheet

import classes from "../../style/auth/login.module.scss";

const Login = ({ loginUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handleLogin = (values) => {
    setLoading(true)
    loginUser(values)
      .then(res => {
        toast.success("You have successfully logged in", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response)
        toast.error('Invalid Username or Password', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 })
        setLoading(false)
      })
  }

  return (
    <>
      <Helmet>
        <title>Login | TraceLyfe</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="lg" spacing={3}>
          <Grid container className={classes.main__container}>
            <Grid item sm={12} md={6} className={classes.left__container}>
              <Formik
                initialValues={{}}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={handleLogin}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ pb: '40px', ml: '-10px' }}>
                      <Logo width="200px" />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Sign in
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Sign in on the internal platform
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"

                      // Remove Autocomplete according to the browser history

                      inputProps={{
                        autoComplete: 'new-email',
                        form: {
                          autoComplete: 'off',
                        },
                      }}
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      sx={{ textAlign: "right" }}
                    >
                      <Link component={RouterLink} to="/reset-password" variant="h6" underline="hover">
                        Forgot Password?
                      </Link>
                    </Typography>
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={loading}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        endIcon={loading ? <CircularProgress color="inherit" size={20} /> : ''}
                      >
                        Sign in now
                      </Button>
                    </Box>
                    {/**/}
                  </form>
                )}
              </Formik>
            </Grid>
            <Hidden mdDown>
              <Grid item sm={12} md={6} className={classes.right__container}>
                <Box className={classes.inner__container}>
                  <img src="/static/images/auth/login.png" />
                </Box>
              </Grid>
            </Hidden>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(auth.loginUser(data))
})


export default connect(null, mapDispatchToProps)(Login);
