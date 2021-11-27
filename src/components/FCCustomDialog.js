import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export function FCCustomDialog(props) {
  const {open, renderContent, size, fullScreen, handleClose} = props;

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        size={size}
        fullScreen={fullScreen}
        fullWidth
      >
        <DialogContent style={{backgroundColor: "#212121"}}>{renderContent()}</DialogContent>
      </Dialog>
    </div>
  );
}
