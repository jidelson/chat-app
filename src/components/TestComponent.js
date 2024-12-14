import React from "react";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../redux/slices/app"; // Adjust path based on your structure

const TestSnackbar = () => {
  const dispatch = useDispatch();

  const handleShowSnackbar = () => {
    dispatch(showSnackbar({ severity: "success", message: "This is a test snackbar!" }));
  };

  return <button onClick={handleShowSnackbar}>Show Test Snackbar</button>;
};

export default TestSnackbar;
