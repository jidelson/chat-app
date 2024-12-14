import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
  snackbar: {
    // open: null,
    // message: null,
    // severity: null,

    open: false, // Default to false
    message: "", // Default to an empty string
    severity: "info", // Default to "info"
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    // openSnackbar(state, action) {
    //     console.log("openSnackbar called with:", action.payload); // Debug log
    //   state.snackbar.open = true;
    //   state.snackbar.severity = action.payload.severity;
    //   state.snackbar.message = action.payload.message;
    // },
    openSnackbar(state, action) {
        console.log("openSnackbar called with:", action.payload); // Debug log
        if (!state.snackbar) {
          console.error("snackbar state is undefined"); // Log error if snackbar is missing
        } else {
          state.snackbar.open = true;
          state.snackbar.message = action.payload.message;
          state.snackbar.severity = action.payload.severity;
        }
      },
    // closeSnackbar(state, action) {
    //     console.log("closeSnackbar called"); // Debug log
    //   state.snackbar.open = false;
    // //   state.snackbar.severity = null;
    // //   state.snackbar.message = null;
    // state.snackbar.message = "";
    // state.snackbar.severity = "info";
    // },
    closeSnackbar(state, action) {
        console.log("closeSnackbar called"); // Debug log
        if (!state.snackbar) {
          console.error("snackbar state is undefined");
        } else {
          state.snackbar.open = false;
          state.snackbar.message = "";
          state.snackbar.severity = "info";
        }
      },
  },
});

//Reducer
export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar()); //dont need to provide toggleSidebar w/ data i am not using "action" around ln 18
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

// export function showSnackbar({ severity, message }) {
//   return async (dispatch, getState) => {
//     dispatch(
//       slice.actions.openSnackbar({
//         message,
//         severity,
//       })
//     );

//     setTimeout(() => {
//       dispatch(slice.actions.closeSnackbar());
//     }, 4000);
//   };
// }

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackbar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackbar());
    }, 4000);
  };

export const closeSnackbar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackbar());
};
