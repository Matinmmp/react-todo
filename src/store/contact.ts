import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = {

};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialContactsState,
    reducers: {
        // increment(state) {
        //     state.counter++;
        // },
        // decrement(state) {
        //     state.counter--;
        // },
        // increase(state, action) {
        //     state.counter = state.counter + action.payload;
        // },
        // toggleCounter(state) {
        //     state.showCounter = !state.showCounter;
        // },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;