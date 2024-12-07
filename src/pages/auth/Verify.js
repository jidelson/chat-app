import { Stack, Typography } from "@mui/material";
import React from "react";

const Verify = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Please Verify OTP</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Sent to email (joeidelson@gmail.com)</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Verify;
