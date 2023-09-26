import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     fullName: '',
//     gender: '',
//     city: '',
//     hobbies: [],
// };
const initialState = [];

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
});

export const { add } = formSlice.actions;
export default formSlice.reducer;