import axios from 'axios';

const API_URL = 'https://6533cc0ee1b6f4c590464683.mockapi.io/contacts';

export async function getContacts() {
  const { data } = await axios.get(`${API_URL}`);
   return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`${API_URL}`, contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
}