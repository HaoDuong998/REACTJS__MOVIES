import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../services/quanLyPhim';

const initialState = {
    listPhim: [],
};

const phimSlice = createSlice({
    name: "phim",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
            state.listPhim = action.payload;
        })
    },
});

export const getAllMovieApi = createAsyncThunk("phim/getAllMovie", async () => {
    const res = await quanLyPhimServ.getAllMovie();
    return res.data.content;
});

// Action creators are generated for each case reducer function
export const { } = phimSlice.actions

export default phimSlice.reducer