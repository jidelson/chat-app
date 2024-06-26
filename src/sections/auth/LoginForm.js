import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Stack } from '@mui/system';
import { Alert, IconButton, InputAdornment, Link } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required") // can dictate password length here - see yup library
    })

    const defaultValues = {
        email: "demo@tawk.com",
        password: "demo1234"
    }

    const methods = useForm({
        resolver: yupResolver(LoginForm),
        defaultValues
    });

    const {
        reset, 
        setError, 
        handleSubmit, 
        formState: {errors, isSubmitting, isSubmitSuccessful}
    } = methods;

    const onSubmit = async (data) => {
        try{
            // submit data to backend
        }
        catch(error){
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message
            })
        }
    }

    return (
        <FormProvider 
            methods={methods} 
            onSubmit={handleSubmit(onSubmit)} 
        >
            <Stack spacing={3} >
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
            

                <RHFTextField name="email" label="Email address" />

                <RHFTextField name="password" label="Password" type={showPassword ? "text" : "password"} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword);
                            }} >
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            </Stack>
            <Stack alignItems={"flex-end"} sx={{my: 2}}>
                <Link variant='body2' color="inherit" underline='always'>
                    Forgot Password?
                </Link>
            </Stack>

        </FormProvider>
    );
};

export default LoginForm;