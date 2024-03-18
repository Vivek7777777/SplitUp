import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import counterReducer from './slice/counterSlice';
import themeReducer from './slice/themeSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
        mode: themeReducer
    }
});

export default store;