import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const result = await axios.post('/contacts', contact);
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
