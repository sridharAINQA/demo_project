import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function ReasonDialog({
  open,
  handleClose,
  handleReject,
  reason,
  handleChange,
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"} >
        <DialogTitle>Reason for Reject</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="reason"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
            value={reason}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleReject}>
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
