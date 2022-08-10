import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Reason({ open, handleClose, reason }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
        <DialogTitle>Reason for Reject</DialogTitle>
        <DialogContent>
          <DialogContentText>{reason}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
