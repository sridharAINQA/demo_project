import React from "react";
import { Drawer, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        minWidth: 400,
        background: "#fff",
        [theme.breakpoints.down('sm')]: {
            maxWidth: 300,
            minWidth: 300,
        },
        overflowX: 'hidden'
    },
    large: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "fixed",
        right: "410px",
        cursor: "pointer",
        top: 10,
        "& img": {
            objectFit: "scale-down",
            backgroundColor: "#fff"
        },
        [theme.breakpoints.down('sm')]: {
            right: "313px",

        },
    },
    root_extra_large: {
        maxWidth: 1000,
        minWidth: 1000,
        background: "#fff",
        [theme.breakpoints.down('sm')]: {
            maxWidth: 300,
            minWidth: 300,
        },
        overflowX: 'hidden'
    },
    large_extra_large: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "fixed",
        right: "1010px",
        cursor: "pointer",
        top: 10,
        "& img": {
            objectFit: "scale-down",
            backgroundColor: "#fff"
        },
        [theme.breakpoints.down('sm')]: {
            right: "313px",

        },
    },
}));

export const AppDrawer = (props) => {
    const close = () => { };

    const classes = useStyles()
    const { direction, variant, open, component, isLarge } = useSelector(state => state.drawer);

    return <>
        {props.children}
        <Drawer anchor={direction} variant={variant} open={open} onClose={close} ModalProps={{ keepMounted: true }}>
            <Avatar src="/images/close.svg" className={`${classes.large} ${isLarge ? classes.large_extra_large : ""}`} onClick={close} />
            <div className={`${classes.root} ${isLarge ? classes.root_extra_large : ""}`}>{component}</div>
        </Drawer>
    </>
}