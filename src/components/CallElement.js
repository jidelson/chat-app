import { faker } from "@faker-js/faker";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import { ArrowDownLeft, ArrowUpRight } from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
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
          <Stack spacing={2} direction="row" alignItems={"center"}>
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

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              {/* <Typography variant="caption">{msg}</Typography> */}
              <Stack direction={"row"} alignItems="center" spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">
                  Yesterday 21:24
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = () => {};

export { CallElement, CallLogElement };
