import { forwardRef } from "react";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import { TypeInputProps } from "./field.types";
import ErrorMessage from "../error/ErrorMessage";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, placeholder, ...rest }, ref) => {
    return (
      <>
        <OutlinedInput
          placeholder={placeholder}
          ref={ref}
          error={!!error}
          {...(rest as OutlinedInputProps)}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </>
    );
  }
);

export default Field;
