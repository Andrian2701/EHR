import { forwardRef } from "react";
import { OutlinedInput, OutlinedInputProps, Typography } from "@mui/material";
import { TypeInputProps } from "./field.types";
import { theme } from "../../../styles/theme";

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
        {error && (
          <Typography color={theme.palette.error.main} marginLeft="14px">
            {error.message}
          </Typography>
        )}
      </>
    );
  }
);

export default Field;
