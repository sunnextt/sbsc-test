import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

export const getUsers = createAsyncThunk(
    'users/profile',
    async ({ page }, { rejectWithValue }) => {
        try {
            const { data } = await userService.getUsers(page);
            return data;
        } catch (err) {
            let error = err;
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUser = createAsyncThunk(
    'users/update',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await userService.updateUser(id);
            return data;
        } catch (err) {
            let error = err;
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    users: {},
    update: {},
    delele: {},
    error: null
};

const createApplicationSlice = createSlice({
    name: 'Application',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.users = payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.update = payload;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
    }
});

const { reducer } = createApplicationSlice;

export default reducer;
