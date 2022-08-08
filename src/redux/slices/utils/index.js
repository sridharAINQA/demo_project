import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    backdrop: {
        
    },
    sideNavBar: {
        open: false
    }
}

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        toogleNavBar(state, { payload }) {
            state.sideNavBar.open = !state.sideNavBar.open;
        }
    },
})

export const { toogleNavBar } = utilsSlice.actions;
export default utilsSlice.reducer;