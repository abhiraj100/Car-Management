
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loader: true  
}

const authSlice = createSlice({
    name: "auth",
    initialState,  
    reducers: {
        userExists: (state, action) => {
            state.user = action.payload;
            state.loader = false;
        },
        userNonExists: (state, action) => {
            state.user = action.payload;
            state.loader = false;
        }
    }
})

export const { userExists, userNonExists } = authSlice.actions;
export default authSlice.reducer;