import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import { SongForm } from "./SongForm";

export const SongFormDialog = ({ onClose, ...rest }) => {
  return (
    <Dialog onClose={onClose} {...rest}>
      <DialogContent>
        <SongForm {...rest} {...{ onClose }} />
      </DialogContent>
    </Dialog>
  );
};
