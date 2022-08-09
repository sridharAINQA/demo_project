import React from "react";
import { Stack, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PageHead({
  showIcon,
  icon,
  title,
  buttonText,
  onButtonClick,
  onIconButtonClick,
}) {
  return (
    <Stack direction={"row"} justifyContent="space-between">
      <Stack direction={"row"} justifyContent="space-between" gap={1}>
        {showIcon && (
          <IconButton onClick={onIconButtonClick}>
            {icon ? icon : <ArrowBackIcon />}
          </IconButton>
        )}
        <Typography variant="h4">{title ?? "Title"}</Typography>
      </Stack>
      {buttonText && (
        <Button
          variant="contained"
          color="primary"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Stack>
  );
}

export default PageHead;
