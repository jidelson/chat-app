import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
            <Typography variant='h4' >
                Get Started With Tawk
            </Typography>

            <Stack  direction={"row"} spacing={0.5}>
                <Typography>Already have an account?</Typography>
                <Link component={RouterLink} to="/auth/login" variant='subtitle2'>
                Sign in
                </Link>

            </Stack>
        </Stack>
        </>
    );
};

export default Register;