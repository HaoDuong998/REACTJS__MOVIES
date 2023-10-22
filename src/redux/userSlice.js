import { createSlice } from '@reduxjs/toolkit';

const dataUserLocal = JSON.parse(localStorage.getItem("user"))
const initialState = {
    user: dataUserLocal,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setDataUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDataUser } = userSlice.actions

export default userSlice.reducer