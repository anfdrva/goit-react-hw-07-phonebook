import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6533cc0ee1b6f4c590464683.mockapi.io";
export const fetchContacts = createAsyncThunk("contacts/fetchAllContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;

    } catch (e) {
        console.log(e.message);

        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ phone, name }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", ({ phone, name }));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk("contacts?deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);

        }
    })