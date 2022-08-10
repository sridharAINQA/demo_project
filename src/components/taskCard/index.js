import React from "react";
import { Stack, Typography, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskCard({
  title,
  status,
  duration,
  handEditClick,
  handleDeleteClick,
}) {
  return (
    <Paper sx={{ p: 2, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Stack direction={"row"} justifyContent="space-between" gap={2}>
            <Typography variant="body1">
              Duration: {`${Number(duration)} hrs`}
            </Typography>
            <Typography variant="body1">
              Status: {status?.charAt(0).toUpperCase() + status?.slice(1)}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton onClick={handEditClick}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TaskCard;
