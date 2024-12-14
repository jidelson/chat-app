// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";

import Snackbar from "@mui/material/Snackbar";
import React from "react";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();

  // ORIGINAL
  // const { open, message, severity } = useSelector(
  //   (state) => state.app.snackbar
  // );

    // Safely destructure snackbar state with fallbacks
    const { open = false, message = "", severity = "info" } = useSelector(
      (state) => state.app?.snackbar || {}
    );



  //debugging
  console.log("Entire Redux state:", useSelector((state) => state));

  console.log("Snackbar state:", useSelector((state) => state.app.snackbar));

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>

      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            dispatch(closeSnackbar());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(closeSnackbar());
            }}
            // severity={severity}
            severity={severity || "info"}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
