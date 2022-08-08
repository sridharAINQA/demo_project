import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    title: "Dialog",
    body: "",
    positiveBtn: "Ok",
    negativeBtn: "Cancel",
    onOk: () => null,
}

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openDialog(state, { payload }) {
            let { title = "Dialog", body = "", positiveBtn = "Ok", negativeBtn = "Cancel", onOk = () => null } = payload;
            state.open = true;
            state.title = title;
            state.body = body;
            state.positiveBtn = positiveBtn;
            state.negativeBtn = negativeBtn;
            state.onOk = onOk
        },
        closeDialog(state, { payload }) {
            state = initialState;
        }
    },
})

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;