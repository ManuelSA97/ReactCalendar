import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Define your initial state here
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        reducerName: (state, action) => {
            // Define your reducer logic here
        },
    },
});

export const { reducerName } = calendarSlice.actions;