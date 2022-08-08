import React from 'react';
import { makeStyles } from "@mui/styles";
import {AppBar, Toolbar, IconButton, Typography, Drawer} from '@mui/material';
import { MeetingRoom, Menu as MenuIcon } from '@mui/icons-material';
import { LocalStorageKeys } from '../../../utils';
import { SideNavBar } from '..';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        display: 'block',
    },
    titleContainer: {
        marginLeft: theme.spacing(2)
    },
    menuIcon: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}));

export const TopNavBar = (props) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        openSideNavBar: false
    })

    const handleLogout = () => {

    }

    const toogleSideNavBar = () => {
        setState({
            ...state,
            openSideNavBar: !state.openSideNavBar
        })
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>

                    <IconButton className={classes.menuIcon} onClick={toogleSideNavBar} size="large">
                        <MenuIcon htmlColor="white" />
                    </IconButton>

                    <div className={classes.titleContainer}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Crayond Boilerplate
                        </Typography>
                        <Typography variant="caption">
                            {`v${localStorage.getItem(LocalStorageKeys.version)}`}
                        </Typography>
                    </div>

                    <div className={classes.grow} />

                    <IconButton
                        aria-label="logout button"
                        aria-controls={"logout_button"}
                        aria-haspopup="true"
                        onClick={handleLogout}
                        color="inherit"
                        size="large">
                        <MeetingRoom />
                    </IconButton>

                    <Drawer
                        open={state.openSideNavBar}
                        variant={"temporary"}
                        anchor="left"
                        onClose={toogleSideNavBar}>
                        <div style={{ width: 240 }}>
                            <SideNavBar isMobile={true} />
                        </div>
                    </Drawer>

                </Toolbar>
            </AppBar>
        </div>
    );
}
