import axios from "axios";

const BASE_URL = 'https://6533cc0ee1b6f4c590464683.mockapi.io/contacts';

const instance = axios.create({
    baseURL: BASE_URL,
});

export async function fetchContacts() {
    const { data } = await instance.get('/');
    return data;
};

export async function addContact(newContact) {
    const { data } = await instance.post('/', newContact);
    return data;
};

export async function removeContact(id) {
    const { data } = await instance.delete(`/${id}`);
    return data;
};