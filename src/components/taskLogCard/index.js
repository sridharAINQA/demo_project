import React from "react";
import { Stack, Typography, Paper, Button } from "@mui/material";

function TaskLogCard() {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack>
          <Typography variant="h5" gutterBottom>
            Task Title
          </Typography>
          <Typography variant="body1">Employee: John Doe</Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Button variant="contained" color="error">Reject</Button>
          <Button variant="contained" color="success">Approve</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TaskLogCard;
