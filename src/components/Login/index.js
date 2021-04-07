import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Card,
  TextField,
  Typography,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import './login.css';

export const Login = ({onSubmit, loading, onChange }) => {

  return (
     <HelmetProvider>
      <Helmet>
        <title>Login | StoreManager</title>
      </Helmet>
      {loading ? <LinearProgress /> : null}
      <Card className="card-body">
       <Box 
          sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}>
        <Container maxWidth="sm">
          <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={yup.object().shape({
            username: yup.string().required(),
            password: yup.string().required()
          })}
          >
          {({handleChange, errors, touched, values, handleBlur}) => (
          <form onSubmit={onSubmit}>
          <Box
            sx={{
              pb: 1,
              pt: 3
            }}
                >
                  <Typography
                    align="center"
                    color="textPrimary"
                    variant="h5"
                  >
                    STORE MANAGER
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  type="text"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    LOGIN
                  </Button>
                </Box>
          </form>)}</Formik>
        </Container>
       </Box>
      </Card>
      </HelmetProvider>
  );
};

export default Login;
