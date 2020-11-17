import React from "react";
import { SongForm } from "./SongForm";

export const SongUpdate = (props) => {
  return <SongForm {...props} isEdit />;
};
