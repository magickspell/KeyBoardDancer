import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import timerReducer from './slice/timerSlice'

export const store = configureStore({
    reducer: {
        //counter: counterReducer,
        timer: timerReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
