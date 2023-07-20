import { createSlice } from '@reduxjs/toolkit';



const initialData={
    id: ''
}

const editSlice = createSlice({
    name: 'edit',
    initialState: initialData,
    reducers: {
        getId(state, action) {
           return void(state.id=action.payload)
        },

    },
});

export const editActions = editSlice.actions;

export default editSlice.reducer;