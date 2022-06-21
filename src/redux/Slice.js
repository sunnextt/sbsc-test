import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';
import { setMessage } from './message';

const user = JSON.parse(localStorage.getItem('user'));

export const register = createAsyncThunk(
    'auth/register',
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await authService.register(email, password);
            return { user: data };
        } catch (error) {
            const message =
                (error.response.data && error.response.data) ||
                error.message ||
                error.toString();
            console.log(message);

            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await authService.login(email, password);
            return { user: data };
        } catch (error) {
            const message =
                (error.response.data && error.response.data) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});
const { reducer } = authSlice;
export default reducer;
