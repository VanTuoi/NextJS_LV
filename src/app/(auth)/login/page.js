'use client'

// third-party
// ==============================|| React - redux ||============================== //
import * as React from 'react';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ==============================||     MUI       ||============================== //
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Password } from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import {
    Box,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
    Link,
    ScopedCssBaseline,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Stack,
    FormHelperText,
    Avatar,
    Divider,
} from '@mui/material';

// ==============================||     Orther       ||============================== //
import Image from "next/image";
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';


// project import
// ==============================|| React - redux ||============================== //
import loader from '@/redux/features/load/loader-slice'
import useAuth from '@/hook/useAuth'

// ==============================||     Orther       ||============================== //
// import { userServices } from '../../services';
// import CustomSnackbar from '../../components/Notification/CustomSnackbar';
import img from '@/assets/login/login.svg'


// ==============================||     Custom       ||============================== //
const CustomDiv = styled(Box)(({ theme }) => ({
    fontFamily: 'Roboto',
    backgroundColor: '#F0F2F5',
    borderRadius: '8px',
    margin: '50px 250px 0px 250px',
}));

const CustomPageLeft = styled(Box)(({ theme }) => ({
    textAlign: 'left',
    height: 'auto',
    alignItems: 'center',
    // margin: '0px 0px 0px 20px',
    padding: '0px 0px 0px 10px',
}));

const CustomPageRight = styled(Box)(({ theme }) => ({
    height: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    margin: '70px 20px 0px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.185)'
}));


const Login = (props) => {

    const { checklogin } = useAuth()
    const router = useRouter()
    const dispatch = useDispatch();
    const [message, setMessage] = React.useState(null);
    const [showSnackbar, setShowSnackbar] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const handleClickRegister = () => {
        router.push('/register')
    }
    const handleSubmitForm = (email, password) => {
        checklogin(email, password);
    };

    const handleLClickForgetPassword = () => {
        // navigate('/abcde')
    }

    useEffect(() => {
        const userData = {
            id: 1,
            // Thêm các trường dữ liệu khác nếu cần
        };

        const url = new URL('http://localhost:8080/get-user');
        url.search = new URLSearchParams(userData).toString();

        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Fetch error:', error));
        // console.log(a);
    }, []);

    return (
        <>
            <CustomDiv>
                <Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={7}>
                                <CustomPageLeft>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: `'Itim', cursive !important`,
                                        }}
                                        variant="h1"
                                        gutterBottom
                                        color={'#D73541'}
                                    >
                                        OpenTable
                                    </Typography>
                                    <Typography marginTop={'-25px'} variant="h5" gutterBottom color={'#000000'}>
                                        OpenTable giúp cuộc sống của bạn thêm đơn giản.
                                    </Typography>
                                    <Image
                                        src={img}
                                        priority
                                        alt='img login'
                                        sx={{
                                            width: '450px',
                                            height: '450px',
                                            borderRadius: '0%',
                                        }}
                                    />
                                </CustomPageLeft>
                            </Grid>
                            <Grid item xs={6} md={5}>
                                <CustomPageRight>
                                    <Stack
                                        direction="column"
                                        spacing={1}
                                        sx={{ padding: '10px 10px 10px 10px' }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                            }}
                                        >
                                            <Typography sx={{ margin: '10px 10px 0px 10px', fontWeight: 700 }} variant="h5" gutterBottom color={'#555555'}>
                                                Đăng nhập
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: '#b8b8b8' }} />
                                        <Formik
                                            initialValues={{
                                                email: '',
                                                password: '',
                                                submit: ''
                                            }}
                                            validationSchema={Yup.object().shape({
                                                email: Yup.string().email('Email không hợp lệ').max(255).required('Email không được trống'),
                                                password: Yup.string().max(255).required('Mật khẩu không được trống')
                                            })}
                                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                                try {
                                                    setStatus({ success: false });
                                                    setSubmitting(false);
                                                    handleSubmitForm(values.email, values.password);
                                                } catch (err) {
                                                    setStatus({ success: false });
                                                    setErrors({ submit: err.message });
                                                    setSubmitting(false);
                                                }
                                            }}
                                        >
                                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                                <form noValidate onSubmit={handleSubmit}>
                                                    <Stack
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="stretch"
                                                        spacing={1}
                                                    >
                                                        <FormControl variant="outlined">
                                                            <InputLabel htmlFor="email-login"
                                                                sx={{ marginTop: '15px' }}
                                                            >Email</InputLabel>
                                                            <OutlinedInput
                                                                id="email-login"
                                                                type="email"
                                                                value={values.email}
                                                                name="email"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                fullWidth
                                                                error={Boolean(touched.email && errors.email)}
                                                                sx={{ marginTop: '15px', width: '95%' }}
                                                                label="Email"
                                                                placeholder=""
                                                            />
                                                            {touched.email && errors.email && (
                                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                                    {errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                        <FormControl variant="outlined">
                                                            <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                                                            <OutlinedInput
                                                                fullWidth
                                                                id="outlined-adornment-password"
                                                                type={showPassword ? 'text' : 'password'}
                                                                value={values.password}
                                                                sx={{ width: '95%' }}
                                                                name="password"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                endAdornment={
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={handleClickShowPassword}
                                                                            onMouseDown={handleMouseDownPassword}
                                                                            edge="end"
                                                                            size="large"
                                                                        >
                                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                }
                                                                label="Password"
                                                                placeholder=""
                                                            />
                                                            {touched.password && errors.password && (
                                                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                                                    {errors.password}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                        <Button
                                                            disableElevation
                                                            disabled={isSubmitting}
                                                            // fullWidth
                                                            size="large"
                                                            type="submit"
                                                            variant="contained"
                                                            color="primary"
                                                            sx={{
                                                                fontSize: '22px', fontWeight: '600', backgroundColor: '#1877F2', color: '#FFFFFF',
                                                                marginTop: '10px', width: '95%', height: '50px', textTransform: 'none',
                                                                '&:hover': {
                                                                    backgroundColor: '#3d91f7',
                                                                },
                                                            }}
                                                        >Đăng nhập</Button>
                                                        <Box onClick={handleLClickForgetPassword} sx={{ fontWeight: '600', fontSize: '16px', color: '#0866FF', cursor: 'pointer' }}>
                                                            {'Quên mật khẩu ?'}
                                                        </Box>
                                                        <ScopedCssBaseline />
                                                    </Stack>
                                                    <Button onClick={handleClickRegister}
                                                        sx={{
                                                            fontSize: '17px', fontWeight: '600', backgroundColor: '#37A621', color: '#FFFFFF',
                                                            marginBottom: '15px', width: '60%', height: '50px', textTransform: 'none',
                                                            '&:hover': {
                                                                backgroundColor: '#43c629',
                                                            },
                                                        }} variant="contained">Tạo tài khoản mới</Button>
                                                </form>
                                            )}
                                        </Formik>
                                    </Stack>
                                </CustomPageRight>
                            </Grid >
                        </Grid >
                    </Box >
                </Box>
            </CustomDiv>
            {/* <CustomSnackbar
                message={message}
                duration={3000}
                onClose={handleSnackbarClose}
                open={showSnackbar}
            /> */}
        </>
    );
};

export default Login;
