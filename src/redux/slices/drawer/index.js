import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    children: <></>,
    title: "Dialog",
    positiveActName: "Ok",
    negativeActName: "Cancel",
    onPositiveAction: () => false
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer(state, { payload }) {
            state.open = true;
            state.children = payload.children;
            state.title = payload?.title ?? initialState.title;
            state.positiveActName = payload?.positiveActName ?? initialState.positiveActName;
            state.negativeActName = payload?.negativeActName ?? initialState.negativeActName;
            state.onPositiveAction = payload?.onPositiveAction ?? initialState.onPositiveAction;
        },
        closeDrawer(state, { payload }) {
            state = initialState;
        }
    },
})

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;