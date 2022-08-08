/**
 * Object with role as key and value, which is used for 
 * comparison of role in different place.
 */
export const UserRoles = {
    role: "role"
};

/**
 * Object which has the proper name of all the role
 * used in the application.
 */
export let UserRolesName = {
    "role": "Role"
};

/**
 * Object which has the different themes used in 
 * the application.
 */
export let Themes = {
    default: "default",
    dark: "dark",
};

/**
 * Object which has the different props for the Alert Component (/src/component/alert) 
 * which is used via AlertContext (/src/contexts) and provided at /src/App.alert.js.
 */
export let AlertProps = {
    vertical: {
        top: "top",
        bottom: "bottom",
    },
    horizontal: {
        left: "left",
        right: "right",
        center: "center",
    },
    severity: {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
    },
};

/**
 * Object which has the different props for the Drawer Component (/src/App.drawer.js) 
 * which is used via DrawerContext (/src/contexts) and provided at /src/App.drawer.js.
 */
export const DrawerProps = {
    direction: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
    },
    variant: {
        permanent: "permanent",
        persistent: "persistent",
        temporary: "temporary",
    },
};

/**
 * Object has the key and value pair of all the keys which 
 * are used to store some values in the local storage.
 */
export let LocalStorageKeys = {
    authToken: "auth_token",
    version: "version"
};

// To build version string
export const VersionFetchURL = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ":" + window.location.port : ''}/meta.json?v=${+new Date()}`;