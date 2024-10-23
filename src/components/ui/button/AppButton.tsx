import { InputHTMLAttributes } from "react";
import { Button } from "@mui/material";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  pending: boolean;
}

const AppButton = ({ children, pending }: IButton) => (
  <Button type="submit" disabled={pending}>
    {children}
  </Button>
);

export default AppButton;
