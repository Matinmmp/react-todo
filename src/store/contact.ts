import { createSlice } from '@reduxjs/toolkit';

const contact: {
    id:string,
    name: string,
    family: string,
    email: string,
    phone: string,
    relative: string,
} = {
    id:'',
    name: "",
    family: "",
    email: "",
    phone: "",
    relative: ""
}

const initialContactsList : Array<typeof contact>=[]

const contactListSlice = createSlice({
    name: 'contact',
    initialState: initialContactsList,
    reducers: {
        getList(state,action) {
             return action.payload;
        },
        
    },
});

export const contactListActions = contactListSlice.actions;

export default contactListSlice.reducer;