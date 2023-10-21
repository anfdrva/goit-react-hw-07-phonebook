import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    reducers: {
        addContacts(state, action) {
            state.items.push(action.payload);
        },
        removeContacts(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        changeFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addContacts, removeContacts, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;