import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {

  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <Box 
        p={2} //this means 2x8=16px
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100}}
      >
      
      <Stack direction="column" alignItems={"center"} sx={{width: "100%"}} spacing={3}>
        <Box sx={{
          backgroundColor: theme.palette.primary.main,
          height: 64,
          width: 64,
          borderRadius: 1.5 //this value is multiplied by 8
        }}>
        <img src={Logo} alt="Chat App Logo"/>    
        </Box>
        <Stack spacing={3}>
          {Nav_Buttons.map((el) => <IconButton key={el.index}>
            {el.icon}
          </IconButton>)}
        </Stack>
       
      </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
