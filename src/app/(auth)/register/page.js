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
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
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
    ToggleButtonGroup,
    ToggleButton,
    label,
    Tooltip,
    Divider,
    Avatar,
} from '@mui/material';

// ==============================||     Orther       ||============================== //
import Image from "next/image";
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';


// project import
// ==============================|| React - redux ||============================== //
import auth, { login } from '@/redux/features/auth/auth-slice'
import loader from '@/redux/features/load/loader-slice'

// ==============================||     Orther       ||============================== //
import img from '@/assets/register/register.svg'
// import CustomSnackbar from '../../components/Notification/CustomSnackbar';
import useRegister from '@/hook/useRegister';


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

    const router = useRouter()
    const { register, status, message } = useRegister()

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repassword, setRePassword] = React.useState('');
    const [gender, setGender] = React.useState('male');
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [showPassword, setShowPassword] = React.useState(false);
    // const [message, setMessage] = React.useState(null);
    // const [showSnackbar, setShowSnackbar] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== gender && newAlignment !== null)
            setGender(newAlignment);
    };

    const handleLinkClickLogin = () => {
        router.push('/login')
    }

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
    };
    const handleSubmitForm = () => {
        register(name, email, password, gender, dateOfBirth)
        if (!status) {
            console.log('1: ' + message);
        }
        else {
            console.log('2: ' + message);
        }
    };

    const validationData = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name === '') {
            setMessage('Tên không được rỗng');
            setShowSnackbar(true);
        } else if (email === '') {
            setMessage('Email không được rỗng');
            setShowSnackbar(true);
        } else if (!emailRegex.test(email)) {
            setMessage('Email không hợp lệ');
            setShowSnackbar(true);
        } else {
            setShowSnackbar(false);
        }
    }

    return (
        <>
            <CustomDiv>
                <Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={7}>
                                <CustomPageLeft>
                                    <Typography
                                        variant="h1"
                                        gutterBottom
                                        color={'#D73541'} //0866FF
                                        sx={{
                                            fontWeight: 900,
                                            fontFamily: `'Itim', cursive !important`,
                                        }}
                                    >
                                        OpenTable
                                    </Typography>
                                    <Typography marginTop={'-25px'} variant="h5" gutterBottom color={'#000000'}>
                                        Hãy tham gia cùng chúng tôi ngay nào
                                    </Typography>
                                    <Box
                                        marginTop={'-70px'}
                                    >
                                        <Image
                                            src={img}
                                            alt="img register"
                                            sx={{
                                                width: '10px',
                                                height: '10px',
                                            }}
                                        />
                                    </Box>
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
                                            <Typography sx={{ margin: '3px 10px 0px 10px', fontWeight: 700 }}
                                                variant="h5" gutterBottom color={'#555555'}>
                                                Đăng ký
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ bgcolor: '#b8b8b8' }} />
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">Họ và tên</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}
                                                label="Họ tên"
                                                fullWidth
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                label="Email"
                                                fullWidth
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">Mật khẩu</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)}
                                                label="Mật khẩu"
                                                fullWidth
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor="component-outlined">Nhập lại mật khẩu</InputLabel>
                                            <OutlinedInput
                                                id="component-outlined"
                                                value={repassword}
                                                onChange={(event) => setRePassword(event.target.value)}
                                                label="Mật khẩu"
                                                fullWidth
                                            />
                                        </FormControl>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Typography sx={{ margin: '3px 10px 0px 10px' }} variant="h7" gutterBottom color={'#666666'}>
                                                Giới tính
                                            </Typography>
                                            <ToggleButtonGroup
                                                color="primary"
                                                value={gender}
                                                exclusive
                                                onChange={handleChange}
                                                aria-label="Platform"
                                            >
                                                <ToggleButton value="male"><MaleIcon /></ToggleButton>
                                                <ToggleButton value="fewmale"><FemaleIcon sx={{}} /></ToggleButton>
                                            </ToggleButtonGroup>
                                        </Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Typography sx={{ margin: '3px 10px 0px 10px' }} variant="h7" gutterBottom color={'#666666'}>
                                                Ngày sinh
                                            </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker value={dateOfBirth} onChange={(NewdateOfBirth) => setDateOfBirth(NewdateOfBirth)} />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Box>
                                        <Divider sx={{ bgcolor: '#b8b8b8' }} />
                                        <Box
                                            display="flex"
                                            justifyContent='center'
                                        >
                                            <Button
                                                sx={{
                                                    fontSize: '22px',
                                                    fontWeight: '600',
                                                    backgroundColor: '#D73541',
                                                    color: '#FFFFFF',
                                                    width: '60%',
                                                    height: '50px',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        backgroundColor: '#ed404b',
                                                    },
                                                }}
                                                onClick={handleSubmitForm}
                                                variant="contained"
                                            >
                                                Đăng ký
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CustomPageRight >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '10px 0 0 0'
                                    }}>
                                    <Box sx={{ marginRight: '10px' }}>
                                        Bạn đã có tài khoản
                                    </Box>
                                    <Box onClick={handleLinkClickLogin} sx={{ fontSize: '18px', color: '#0866FF', cursor: 'pointer' }}>
                                        {'Đăng nhập'}
                                    </Box>
                                </Box>
                            </Grid >
                        </Grid >
                    </Box >
                </Box >
            </CustomDiv >
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

