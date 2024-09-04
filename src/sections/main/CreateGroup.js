import React from "react";
import { Dialog, DialogTitle, Slide } from "@mui/material";

// TODO => Create a reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroup = ({ open, handleClose }) => {
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
        {/* Title */}
        <DialogTitle>Create New Group</DialogTitle>
        {/* Content */}
      </Dialog>
    </>
  );
};

export default CreateGroup;
