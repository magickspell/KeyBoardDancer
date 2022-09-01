import {createSlice} from '@reduxjs/toolkit';

export interface TimerStateInt {
    theme: string,
}

const initialState: TimerStateInt = {
    theme: `light`,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setLightTheme: (state) => {
            state.theme = `light`
        },
        setDarkTheme: (state) => {
            state.theme = `dark`
        },
    },
});

export const {setLightTheme, setDarkTheme} = themeSlice.actions;

export default themeSlice.reducer;
