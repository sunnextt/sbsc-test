import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/Slice';
import usersReducer from '../redux/userSlice';
import messageReducer from '../redux/message'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        message: messageReducer
    }
});
