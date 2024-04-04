import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { faker } from "@faker-js/faker";

import Logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

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
      
      <Stack 
        direction="column" 
        alignItems={"center"}
        justifyContent="space-between" 
        sx={{height: "100%"}} 
        spacing={3}
      >
      <Stack alignItems={"center"} spacing={4}>
        <Box sx={{
          backgroundColor: theme.palette.primary.main,
          height: 64,
          width: 64,
          borderRadius: 1.5 //this value is multiplied by 8
        }}>
        <img src={Logo} alt="Chat App Logo"/>    
        </Box>
        <Stack sx={{width: "max-content"}} direction="column" alignItems="center" spacing={3}>
          {Nav_Buttons.map((el) => (
            el.index === selected ? 
            <Box 
              p={1} 
              sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
            >
              <IconButton 
                sx={{width: "max-content", color: "#fff"}} key={el.index}
              >
                {el.icon}
              </IconButton>
            </Box>
            :
            <IconButton 
              onClick={() => {
                setSelected(el.index)
              }}
              sx={{width: "max-content", color: "#000"}}
              key={el.index}
            >
                {el.icon}
              </IconButton>
            ))}
          <Divider sx={{width: "48px"}} />
          {selected === 3 ? //this 3 value and below 3 value in setSelected coming from NavButtons in /src/data/index.js
            <Box 
              p={1} 
              sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
            >
              <IconButton sx={{width:"max-content", color: "#fff"}}>
                <Gear />
              </IconButton>
            </Box>
            :
            <IconButton  onClick={() => {
              setSelected(3)
            }}
            sx={{width: "max-content", color: "#000"}}
            >
              <Gear />
            </IconButton>
          }
        
        </Stack>
        </Stack>
        
        <Stack>
          <Avatar src={faker.image.avatar()} />
        </Stack>
        
      
       
      </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
