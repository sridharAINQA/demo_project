import React from "react";
import { Stack, Typography, Paper, Button } from "@mui/material";
import { TASK_LOG_STATUS } from "../../utils";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Reason from "./reason";

function TaskLogCard({
  title,
  status = TASK_LOG_STATUS.PENDING,
  duration,
  employee,
  reason,
  handApproveClick,
  handleRejectClick,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Paper sx={{ p: 2 }}>
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
              Employee: {`${employee?.firstName} ${employee?.lastName}`}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          {status === TASK_LOG_STATUS.APPROVED ? (
            <Typography variant="body1" sx={{ color: "success.main" }}>
              Approved
            </Typography>
          ) : status === TASK_LOG_STATUS.REJECTED ? (
            <Stack direction={"row"} justifyContent="space-between" gap={2}>
              <InfoOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
              <Typography variant="body1" color="error">
                Rejected
              </Typography>
            </Stack>
          ) : (
            <>
              <Button
                variant="contained"
                color="error"
                onClick={handleRejectClick}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handApproveClick}
              >
                Approve
              </Button>
            </>
          )}
        </Stack>
      </Stack>
      <Reason open={open} handleClose={() => setOpen(false)} reason={reason} />
    </Paper>
  );
}

export default TaskLogCard;
