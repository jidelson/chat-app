import React from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';


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
                    : theme.palette.background 
                    }}
            >

            </Box>
            {/* Right Panel */}
        </Stack> 
        </>
    );
};

export default Settings;