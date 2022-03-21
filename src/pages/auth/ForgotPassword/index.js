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
  Link
} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// @react-redux
import { useDispatch } from "react-redux";
import { auth } from "../../../redux/actions";
import Logo from "../../../components/Logo";
// Stylesheet
import classes from "../../../style/auth/login.module.scss";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = (values) => {
    if (values) {
      setLoading(true)
      dispatch(auth.resetPassword(values))
        .then(res => {
          setLoading(false)
          setSuccess(true)
        })
        .catch(err => {
          setLoading(false)
        })
    }


  }


  return (
    <>
      <Helmet>
        <title>Reset Password | TraceLyfe</title>
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
              {
                !success
                  ?
                  <Formik
                    initialValues={{}}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    })}
                    onSubmit={handleResetPassword}
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
                      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <Box sx={{ pb: '40px', ml: '-10px' }}>
                          <Logo width="200px" />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >
                            <Link
                              component={RouterLink}
                              to="/login"
                              underline="hover"
                              sx={{
                                display: "flex",
                                alignItems: "center"
                              }}
                            >
                              <KeyboardBackspaceIcon sx={{ mr: 1 }} />
                              Back to Login
                            </Link>
                          </Typography>
                          <Typography
                            color="textPrimary"
                            variant="h2"
                          >
                            Forgot your password?
                          </Typography>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body1"
                            sx={{
                              pt: 2,
                            }}
                          >
                            Don't worry! Just fill in your registered email and
                            we'll send you a link to reset your password.
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
                            Reset Password
                          </Button>
                        </Box>
                        {/**/}
                      </form>
                    )}
                  </Formik>
                  :
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                      <RouterLink to="/">
                        <Logo width="200px" />
                      </RouterLink>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        <Link
                          component={RouterLink}
                          to="/login"
                          underline="hover"
                          sx={{
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
                          <KeyboardBackspaceIcon sx={{ mr: 1 }} />
                          Back to Login
                        </Link>
                      </Typography>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Email has been sent successfully.
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body1"
                        sx={{
                          pt: 2,
                        }}
                      >
                        Please check your email inbox to reset your password.
                      </Typography>

                    </Box>

                  </Box>
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};



export default ForgotPassword;
