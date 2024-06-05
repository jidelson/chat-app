import React from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft } from 'phosphor-react';
import { faker } from '@faker-js/faker';


const Settings = () => {

    const theme = useTheme();

    return (
        <>
        <Stack direction={"row"} sx={{width: "100%"}} >
            {/* Left Panel */}
            <Box 
                sx={{
                    overflowY: "scroll", 
                    height: "100vh", 
                    width: 320, 
                    backgroundColor: theme.palette.mode === "light" 
                    ? "#F8FAFF" 
                    : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" 
                    }}
            >
                <Stack p={4} spacing={5}>
                    {/* Header */}
                    <Stack direction={"row"} alignItems="center" spacing={3}>
                        <IconButton>
                            <CaretLeft  size={24} color={"#4B4B4B"} />
                        </IconButton>
                        <Typography variant='h6' >
                            Settings
                        </Typography>
                    </Stack>
                    {/* Profile */}
                    <Stack direction={"row"} spacing={3} >
                        <Avatar sx={{width: 56, height: 56}} src={faker.image.avatar()} alt={faker.name.fullName()} />
                    </Stack>
                    {/* List of options */}
                </Stack>
            </Box>
            {/* Right Panel */}
        </Stack> 
        </>
    );
};

export default Settings;