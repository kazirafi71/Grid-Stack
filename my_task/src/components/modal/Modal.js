import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Modal_Form } from "./modal form";
import Add_Benefit from "./add_benefit/Add_Benefit";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Add Benefits</Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h6" color="primary">
            Add Benefits
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Add_Benefit />
          <Typography
            className="my-3"
            variant="h6"
            style={{ color: "#F15A29" }}
          >
            Benefits
          </Typography>
          <div
            style={{
              background: "#F3ECDD",
              boxShadow: "0px 0px 3px 0px",
              margin: "10px",
            }}
            className="d-flex justify-content-evenly align-align-items-center border p-2  rounded"
          >
            <WifiTetheringIcon
              className="m-3"
              style={{
                color: "#F15A29",
                borderRadius: "30px",
                boxShadow: "0px 0px 10px 8px #F15A29",
              }}
            />
            <div className=" d-flex justify-content-between align-items-center">
              <div className="">
                <Typography style={{ color: "#F15A29" }} variant="subtitle1">
                  Excellent Health Care
                </Typography>
                <Typography variant="subtitle2">
                  We offer a comprehensive Benefits Package that includes
                  Medical, dental, and vision coverage
                </Typography>
              </div>
              <div className="d-flex">
                <CreateIcon />
                <DeleteIcon />
                <DragIndicatorIcon />
              </div>
            </div>
          </div>

          <br />
          <br />
          <Modal_Form />
        </DialogContent>
        <DialogActions>
          <Button
            className="px-4"
            variant="outlined"
            style={{
              borderRadius: "30px",
              border: "1px solid #2D3E8B",
              color: "#2D3E8B",
            }}
          >
            Back
          </Button>
          <Button
            className="px-4"
            variant="contained"
            color="primary"
            style={{ borderRadius: "30px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
