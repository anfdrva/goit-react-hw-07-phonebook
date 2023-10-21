import { createReducer } from "@reduxjs/toolkit";
import { fetchContactsCreat, addContactsCreate, removeContactsCreate } from "./contactsOperation";
import { filter } from "./contactsAction";

const entities = createReducer([], {
    [fetchContactsCreat.fulfilled]: (_, action) => action.payload,
    [addContactsCreate.fulfilled]: (state, action) => [action.payload, ...state],
    [removeContactsCreate.fulfilled]: (state, action) => state.filter(item => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
    [fetchContactsCreat.pending]: () => true,
    [fetchContactsCreat.fulfilled]: () => false,
    [fetchContactsCreat.rejected]: () => false,
    [addContactsCreate.pending]: () => true,
    [addContactsCreate.fulfilled]: () => false,
    [addContactsCreate.rejected]: () => false,
    [removeContactsCreate.pending]: () => true,
    [removeContactsCreate.fulfilled]: () => false,
    [removeContactsCreate.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContactsCreat.rejected]: (_, action) => action.payload,
    [fetchContactsCreat.pending]: () => null,
    [addContactsCreate.rejected]: (_, action) => action.payload,
    [addContactsCreate.pending]: () => null,
    [removeContactsCreate.rejected]: (_, action) => action.payload,
    [removeContactsCreate.pending]: () => null,
});

const filterReducer = createReducer('', {
    [filter]: (_, action) => action.payload,
});

export { entities, isLoading, error, filterReducer };