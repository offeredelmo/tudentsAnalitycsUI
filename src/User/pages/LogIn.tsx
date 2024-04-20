
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../../auth/context/AuthContext';


// TODO remove, this demo shouldn't need to reset the theme.


export const LogIn = () => {
    console.log("me renderizo")
    const navigate = useNavigate();

    const {login} = useContext(AuthContext) 

  

    //logica del iconbutton para mostrar la contraseña o no
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    //logica para obtener los datos del formulario y hacer la validacion de los inputs
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = {
            email: data.get('email') as string,
            password: data.get('password') as string
        };

        // se evalua si password cumple con la exprecion regular 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(user.email);

        !isEmailValid ? setEmailError(false) : setEmailError(true)
        !user.password ? setPasswordError(false) : setPasswordError(true)

        if (user.email && user.password) {
        } else {
            console.log("errorrrrr")
        }
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        type="email"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        error={!emailError}
                        helperText={!emailError ? "Required" : ""}
                    />
                    <FormControl sx={{ marginTop: 2, width: '100%' }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            error={!passwordError}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            required={true}
                        />
                        {!passwordError ? <Typography sx={{ paddingLeft: 2 }} variant="caption" color="error">Required</Typography> : ""}
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                </Box>
                <Link to="/singup">I dont have an account</Link>
            </Box>
            {/* {
                mutation.isPending ? (
                    <Alert severity="info">Cargando</Alert>
                ) : (
                    <>
                        {mutation.isError ? (
                            <Alert severity="error">{mutation.error.message}</Alert>
                        ) : null}

                        {mutation.isSuccess ? <Alert severity="success">Succes</Alert> : null}
                    </>

                )
            } */}
        </Container>

    );
}