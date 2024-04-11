import React from 'react';
import { Stack, Divider, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const TextMsg = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"} >
            <Box 
                p={1.5} 
                sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius: 1.5, //1.5 * 8 = 12px
                width: "max-content"
                }} 
            >
                <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"} >
                    {el.message}
                </Typography>
            </Box>
        </Stack>
    );
};

const Timeline = ({el}) => {
    const theme = useTheme();
    return <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Divider width="46%" />
        <Typography variant='caption' sx={{color: theme.palette.text}} >{el.text}</Typography>
        <Divider width="46%" />
    </Stack>;
};

export  { Timeline, TextMsg };