import React from 'react';
import { Stack, Box } from '@mui/material';

const Conversation = () => {
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
            {/* Chat Header */}
            <Box 
                sx={{
                    height: 100, 
                    width: "100%", 
                    backgroundColor: "#F8FAFF", 
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                    }}
            >

            </Box>
            {/* Message */}
            <Box width={"100%"} sx={{flexGrow: 1}}>
            
            </Box>
            {/* Chat Footer */}
            <Box 
                sx={{
                    height: 100, 
                    width: "100%", 
                    backgroundColor: "#F8FAFF", 
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                    }}
            >

            </Box>
        </Stack>
    );
};

export default Conversation;