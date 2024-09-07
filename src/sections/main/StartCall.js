import React from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Stack,
  } from "@mui/material";

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const StartCall = ({open, handleClose}) => {
    return (
        <>
        <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
      >

        {/*  */}
        <DialogTitle sx={{mb: 3}}>Start Call</DialogTitle>
        {/*  */}
        <DialogContent>
         

        </DialogContent>

      </Dialog>
        </>
    );
};

export default StartCall;