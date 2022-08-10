import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { authAPI, usersAPI } from "./services";
import {
  authReducer,
  backdropReducer,
  dialogReducer,
  drawerReducer,
  utilsReducer,
} from "./slices";
import { rootReducer } from "timesheet-binder";

const ReduxStore = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    auth: authReducer,
    backdrop: backdropReducer,
    dialog: dialogReducer,
    utils: utilsReducer,
    drawer: drawerReducer,
    rootReducer: rootReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
});

export const AppRedux = ({ children }) => {
  return <Provider store={ReduxStore}>{children}</Provider>;
};
