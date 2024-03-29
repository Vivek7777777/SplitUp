import { useTheme } from "@emotion/react"
import { Box, Button, TextField, useMediaQuery, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from "../../state/slice/themeSlice";
import { useState } from "react";
import * as yup from 'yup';
import { Formik } from 'formik';



const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required")
});

const initialValueLogin = {
    email: '',
    password: ''
}

const initialValueRegister = {
    firstName: '',
    lastName: '',
    // email: '',
    // password: ''
    ...initialValueLogin
}

export default function Form() {

    // const { palette } = useTheme();
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [passwrod, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const isNonMobileScreens = useMediaQuery("(min-width: 900px)");
    const { palette } = useTheme();


    const login = async (e) => {
        console.log(e);
    }
    
    const register = async (e) => {
        console.log(e);
    }




    const handleFormSubmit = async (e) => {
        if(isLogin)
            await login(e)
        else
            await register(e)
    }


    return (
        <>
            <Formik
                initialValues={isLogin ? initialValueLogin : initialValueRegister}
                validationSchema={isLogin ? loginSchema : registerSchema}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            width={isNonMobileScreens ? '40vw' : '80vw'}
                            display='grid'
                            gap="20px"
                            justifyContent={"center"}
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                gridColumn: "span 4",
                            }}
                        >
                            {!isLogin && (
                                <>
                                    <TextField
                                        label='First name'
                                        variant='outlined'
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        label='Last name'
                                        variant='outlined'
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                </>
                            )}
                            <TextField
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={Boolean(touched.email) && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={Boolean(touched.password) && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <Button
                                fullWidth
                                type="submit"
                                sx={{
                                    fontWeight: '500',
                                    m: "1rem 0",
                                    p: "1rem",
                                    gridColumn: "span 4",
                                    backgroundColor: palette.primary.main,
                                    color: palette.background.alt,
                                    "&:hover": { color: palette.primary.main }
                                }}
                            >
                                {isLogin ? 'Login' : 'Register'}
                            </Button>

                            <Typography
                                onClick={() => { setIsLogin(prev => !prev) }}
                                sx={{
                                    color: palette.primary.main,
                                    gridColumn: "span 4",
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: palette.primary.light
                                    }
                                }}
                            >
                                {isLogin ?
                                    'Create new account' :
                                    'Already have an account'
                                }
                            </Typography>

                        </Box>
                    </form>
                )}
            </Formik>
        </>
    )
}