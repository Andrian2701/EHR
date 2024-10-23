import { ReactNode } from "react";
import { Typography } from "@mui/material";

interface IErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => (
  <Typography color="error">{children}</Typography>
);

export default ErrorMessage;
