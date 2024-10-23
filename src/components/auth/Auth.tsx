import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Field from "../ui/field/Field";
import AppButton from "../ui/button/AppButton";
import { authService } from "../../services/auth.service";
import { IAuthFormState } from "../../types/auth.types";
import { theme } from "../../styles/theme";

interface IAuthProps {
  type: "Login" | "Register";
}

const Auth = ({ type }: IAuthProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormState>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IAuthFormState) => {
      if (type === "Login") {
        return authService.loginUser(data);
      }
      return authService.registerUser(data);
    },
    onSuccess: () => navigate("/"),
  });

  const onSubmit: SubmitHandler<IAuthFormState> = (data) => mutate(data);

  return (
    <Box
      p={{ xs: "20px 15px", sm: "30px 20px" }}
      width={{ xs: "85%", sm: "400px" }}
      bgcolor={theme.palette.background.paper}
      borderRadius="6px"
      boxShadow={2}
    >
      <Typography variant="h1">{type}</Typography>
      <Typography variant="body1" marginTop={1.5}>
        {type === "Login"
          ? "Please login to your account to securely access your data"
          : "Create your account to securely manage your data"}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={4} marginTop={4}>
          <Box display="flex" flexDirection="column" gap={1.5}>
            {type !== "Login" && (
              <Field
                placeholder="Name:"
                type="name"
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "At least 2 symbols",
                  },
                })}
                error={errors.name}
                disabled={isPending}
              />
            )}
            <Field
              placeholder="Email:"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid address",
                },
              })}
              error={errors.email}
              disabled={isPending}
            />
            <Field
              placeholder="Password:"
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "At least 8 symbols",
                },
              })}
              error={errors.password}
              disabled={isPending}
            />
          </Box>
          <AppButton pending={isPending}>Proceed</AppButton>
          <Typography
            component={Link}
            to={type === "Login" ? "/register" : "/login"}
            color={theme.palette.primary.main}
            sx={{ textDecoration: "none" }}
          >
            {type === "Login"
              ? "Register new account"
              : "Login to existing account"}
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
