import React from "react";
import { Stack, Typography, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskCard() {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack>
          <Typography variant="h5" gutterBottom>
            Task Title
          </Typography>
          <Typography variant="body1">Status: Pending</Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ flex: 1 }}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TaskCard;
