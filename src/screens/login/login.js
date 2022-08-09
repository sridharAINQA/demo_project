import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import { LoginSuccess } from "../../router/access";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Login = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  // States
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: true,
  });
  const [error, setError] = useState([]);

  const validateForm = () => {
    const { email, password } = state;
    const error = [];
    if (!email) {
      error.push("email");
    }
    if (!password) {
      error.push("password");
    }

    setError(error);

    return error?.length === 0;
  };

  const onLogin = () => {
    debugger;
    if (!validateForm()) return;
    localStorage.setItem(LocalStorageKeys.authToken, "authtoken");
    navigate(AppRoutes.employeeTaskList);
  };

  React.useEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      navigate(LoginSuccess());
    }
    console.log("here");
  });

  const handleChange = (event, key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      {/* <Typography variant="body1">Your are not logged in!!!</Typography>
      <Button variant={"contained"} color={"primary"} onClick={onLogin}>
        LogIn
      </Button> */}

      <Stack gap={3}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          required
          value={state.email}
          onChange={(e) => handleChange(e, "email")}
          error={error.includes("email")}
          helperText={error.includes("email") && "Email is required"}
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          required
          type={state.showPassword ? "text" : "password"}
          value={state.password}
          onChange={(e) => handleChange(e, "password")}
          error={error.includes("password")}
          helperText={error.includes("password") && "Password is required"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button variant={"contained"} color={"primary"} onClick={onLogin}>
          Login
        </Button>
      </Stack>
    </div>
  );
};
