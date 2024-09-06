import { faker } from "@faker-js/faker";
import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";

const CallLogElement = ({online}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}
       

      </Stack>


      </Box>
    </>
  );
};

const CallElement = () => {};

export {CallElement, CallLogElement};
