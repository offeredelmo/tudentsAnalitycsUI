import React from 'react';
import { Container, TextField, Button, Box, Checkbox, FormControlLabel, Typography, Link } from '@mui/material';

export const LoginView: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ mt: 2, width: '100%', textAlign: 'left', mr:37, fontWeight: 500 }} >
          Log In
        </Typography>
        <Typography variant="subtitle1" sx={{ width: '100%', textAlign: 'left', mr:37, fontWeight: 200 }}>
          Get started for free
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width:700}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ACTION
          </Button>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Link href="#" variant="body2">
              Create account
            </Link>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginView;
