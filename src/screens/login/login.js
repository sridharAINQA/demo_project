import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys, UserRoles } from "../../utils";
import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../../router/routes";
import { LoginSuccess } from "../../router/access";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { actions } from "timesheet-binder";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const { GET_USER_BY_USERNAME_PASSWORD } = actions;

export const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  // States
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
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

  const storeUserInStorage = (user) => {
    let storeUser = { ...user };
    delete storeUser.password;

    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(storeUser));
  };

  const onLogin = () => {
    debugger;
    if (!validateForm()) return;

    Promise.resolve(
      dispatch(
        GET_USER_BY_USERNAME_PASSWORD({
          mailID: state.email,
          password: state.password,
        })
      )
    ).then((res) => {
      enqueueSnackbar("Successfully logged in", { variant: "success" });
      debugger;
      if (res?.payload?.data?.result?.length > 0) {
        const user = res.payload.data.result[0];
        if (user?.roleID === "Role/10001") {
          // Set the user role and user in the local storage
          localStorage.setItem(LocalStorageKeys.role, UserRoles.manager);

          storeUserInStorage(user);

          // Redirect the user to the authorized route
          navigate(LoginSuccess(UserRoles.manager));
        } else if (user?.roleID === "Role/10000") {
          // Set the user role and mailID in the local storage
          localStorage.setItem(LocalStorageKeys.role, UserRoles.employee);

          storeUserInStorage(user);

          // Redirect the user to the authorized route
          navigate(LoginSuccess(UserRoles.employee));
        } else {
          // NOTE: notistack
          enqueueSnackbar("Invalid user", { variant: "error" });
        }
      }
    });
  };

  // React.useEffect(() => {
  //   if (localStorage.getItem(LocalStorageKeys.role)) {
  //     const myRoutes = LoginSuccess(
  //       localStorage.getItem(LocalStorageKeys.role)
  //     );
  //     debugger;
  //     // navigate();
  //   }
  //   console.log("here");
  // });

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
