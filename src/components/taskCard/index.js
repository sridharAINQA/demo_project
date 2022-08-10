import React from "react";
import { Stack, Typography, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskCard({ title, status, handEditClick, handleDeleteClick }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">
            Status: {status?.charAt(0).toUpperCase() + status?.slice(1)}
          </Typography>
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
