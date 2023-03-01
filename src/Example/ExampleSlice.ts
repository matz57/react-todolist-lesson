import { createSlice } from '@reduxjs/toolkit';

interface State {
    name: string;
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        name: 'Example',
    },
    reducers: {
        setName: (state: { name: string }, action: { payload: string }) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = exampleSlice.actions;

export default exampleSlice.reducer;
