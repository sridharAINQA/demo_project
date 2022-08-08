import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "20%"
    }
}))

export const Home = props => {

    const navigate = useNavigate();
    const classes = useStyles();

    const onLogOut = () => {
        localStorage.removeItem(LocalStorageKeys.authToken);
        navigate(AppRoutes.login);
    }

    return <div className={classes.root}>
        <Typography variant="body1">
            Your are logged in!!!
        </Typography>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogOut}
        >
            Logout
        </Button>
    </div>
}