import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';
import { LoginSuccess } from "../../router/access";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "20%"
    }
}))

export const Login = props => {

    const navigate = useNavigate();
    const classes = useStyles();

    const onLogin = () => {
        localStorage.setItem(LocalStorageKeys.authToken, "authtoken");
        navigate(AppRoutes.employeeTaskList);
    }

    React.useEffect(() => {
        if (localStorage.getItem(LocalStorageKeys.authToken)) {
            navigate(LoginSuccess())
        }
        console.log("here")
    })

    return <div className={classes.root}>
        <Typography variant="body1">
            Your are not logged in!!!
        </Typography>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogin}
        >
            LogIn
        </Button>
    </div>
}
