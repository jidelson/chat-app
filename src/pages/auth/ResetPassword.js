import { Stack, Typography } from "@mui/material";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot Password?
        </Typography>
        <Typography sx={{color: "text.secondary", mb: 5}}>
            Please enter the email address associated with your account and we will email you a link to 
            reset your password.
        </Typography>

        {/* Reset Password Form */}
      </Stack>
    </>
  );
};

export default ResetPassword;
