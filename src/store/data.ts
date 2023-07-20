import { createSlice } from '@reduxjs/toolkit';



const initialData:{
    fetchData:object|string
}={
    fetchData:''
}

const dataSlice = createSlice({
    name: 'date',
    initialState: initialData,
    reducers: {
        fetchData(state, action) {
           return void(state.fetchData = action.payload)
        },

    },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;