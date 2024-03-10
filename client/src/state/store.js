import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import counterReducer from './slice/counterSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
    }
});

export default store;