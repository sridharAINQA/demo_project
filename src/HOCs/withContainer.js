import { Box, Container } from "@mui/material";
import React from "react";

const withContainer = (Component) => (props) => {
  return (
    <Box mt={6} mb={2}>
      <Container maxWidth="md">
        <Component {...props}>{props.children}</Component>
      </Container>
    </Box>
  );
};

export default withContainer;
