"use client";

import { Dices } from "lucide-react";
import classes from "./RefreshRandomImageButton.module.css";

type RefreshRandomImageButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const RefreshRandomImageButton = ({
  onClick,
  disabled = false,
}: RefreshRandomImageButtonProps) => {
  return (
    <button
      type="button"
      className={classes.refreshButton}
      onClick={onClick}
      disabled={disabled}
      title="Load another random image"
      aria-label="Load another random image"
    >
      <Dices />
    </button>
  );
};

export default RefreshRandomImageButton;
