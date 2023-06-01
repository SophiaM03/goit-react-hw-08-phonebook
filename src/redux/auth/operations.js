import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const set = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clear = () => {
  axios.defaults.headers.common.Authorization = '';
};
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    set(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clear();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    set(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});
const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
};
export default operations;
